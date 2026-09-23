"""VALERI tab icon from the Insigma V used in the wordmark."""

from __future__ import annotations

from pathlib import Path

from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.ttLib import TTFont
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
FONT_PATH = ROOT / "src" / "fonts" / "Insigma.otf"
APP = ROOT / "src" / "app"

PAPER = "#FCFAF4"
ACCENT_DEEP = "#324C6E"
PAPER_RGB = (252, 250, 244)
ACCENT_DEEP_RGB = (50, 76, 110)


def v_geometry() -> tuple[str, tuple[float, float, float, float]]:
    font = TTFont(FONT_PATH)
    glyphs = font.getGlyphSet()
    name = font.getBestCmap()[ord("V")]
    glyph = glyphs[name]
    path_pen = SVGPathPen(glyphs)
    glyph.draw(path_pen)
    bounds_pen = BoundsPen(glyphs)
    glyph.draw(bounds_pen)
    assert bounds_pen.bounds is not None
    return path_pen.getCommands(), bounds_pen.bounds


def write_svg(path: Path, size: int = 32) -> None:
    commands, (xmin, ymin, xmax, ymax) = v_geometry()
    pad = size * 0.20
    box = size - pad * 2
    gw, gh = xmax - xmin, ymax - ymin
    scale = box / max(gw, gh)
    # Font y-up → SVG y-down. Sit the V a touch low so it feels centered.
    tx = size / 2 - (xmin + xmax) / 2 * scale
    ty = size / 2 + (ymin + ymax) / 2 * scale + size * 0.02
    radius = size * 0.22
    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}">'
        f'<rect width="{size}" height="{size}" rx="{radius:.2f}" fill="{ACCENT_DEEP}"/>'
        f'<path fill="{PAPER}" d="{commands}" '
        f'transform="translate({tx:.3f} {ty:.3f}) scale({scale:.6f} {-scale:.6f})"/>'
        "</svg>\n"
    )
    path.write_text(svg, encoding="utf-8")


def render_png(size: int, *, rounded: bool) -> Image.Image:
    # Next.js rejects ICO frames whose embedded PNG is RGB. Keep every size RGBA.
    denim = (*ACCENT_DEEP_RGB, 255)
    img = Image.new("RGBA", (size, size), denim if not rounded else (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    if rounded:
        radius = max(1, int(round(size * 0.22)))
        draw.rounded_rectangle((0, 0, size - 1, size - 1), radius=radius, fill=denim)
    font = ImageFont.truetype(str(FONT_PATH), int(size * 0.68))
    cx, cy = size / 2, size / 2 + size * 0.03
    draw.text((cx, cy), "V", font=font, fill=(*PAPER_RGB, 255), anchor="mm")
    return img


def save_ico(path: Path, sizes: list[int]) -> None:
    frames = {size: render_png(size, rounded=True) for size in sizes}
    # Pillow drops any size larger than the image passed as `im`.
    largest = max(sizes)
    frames[largest].save(
        path,
        format="ICO",
        sizes=[(size, size) for size in sizes],
        append_images=[frames[size] for size in sizes if size != largest],
    )


def main() -> None:
    APP.mkdir(parents=True, exist_ok=True)
    write_svg(APP / "icon.svg")

    # iOS masks the touch icon itself; a full-bleed square avoids black corners.
    render_png(180, rounded=False).save(APP / "apple-icon.png", "PNG", optimize=True)
    save_ico(APP / "favicon.ico", [16, 32, 48, 256])
    print("wrote", APP / "icon.svg")
    print("wrote", APP / "apple-icon.png")
    print("wrote", APP / "favicon.ico")


if __name__ == "__main__":
    main()
