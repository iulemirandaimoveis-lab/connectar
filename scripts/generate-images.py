"""
Generate professional placeholder images for Connectar website.
Dark theme with gold (#E5A72D) accents.
"""
import math
import random
import os
from PIL import Image, ImageDraw, ImageFilter, ImageFont

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'public', 'images')
os.makedirs(OUTPUT_DIR, exist_ok=True)

GOLD = (229, 167, 45)
DARK = (8, 8, 10)
DARK2 = (6, 6, 6)
DARK3 = (14, 14, 18)


def lerp_color(c1, c2, t):
    return tuple(int(a + (b - a) * t) for a, b in zip(c1, c2))


def radial_gradient(draw, cx, cy, radius, color_center, color_edge, w, h):
    """Draw a soft radial gradient."""
    for y in range(h):
        for x in range(w):
            dist = math.sqrt((x - cx) ** 2 + (y - cy) ** 2)
            t = min(dist / radius, 1.0)
            t = t * t  # ease
            c = lerp_color(color_center, color_edge, t)
            draw.point((x, y), fill=c)


def add_noise(img, amount=15):
    """Add film grain noise."""
    pixels = img.load()
    w, h = img.size
    random.seed(42)
    for y in range(h):
        for x in range(w):
            r, g, b = pixels[x, y][:3]
            n = random.randint(-amount, amount)
            pixels[x, y] = (
                max(0, min(255, r + n)),
                max(0, min(255, g + n)),
                max(0, min(255, b + n)),
            )
    return img


def draw_hex(draw, cx, cy, size, outline_color, width=1):
    """Draw a hexagon."""
    points = []
    for i in range(6):
        angle = math.radians(60 * i - 30)
        px = cx + size * math.cos(angle)
        py = cy + size * math.sin(angle)
        points.append((px, py))
    draw.polygon(points, outline=outline_color, fill=None)


def create_hero_bg():
    """Dark abstract tech background with subtle gold glow and network lines."""
    w, h = 1920, 1080
    img = Image.new('RGB', (w, h), DARK)
    draw = ImageDraw.Draw(img)

    # Base dark gradient
    for y in range(h):
        t = y / h
        c = lerp_color((12, 12, 16), DARK, t)
        draw.line([(0, y), (w, y)], fill=c)

    # Gold glow top-right
    glow = Image.new('RGB', (w, h), (0, 0, 0))
    gd = ImageDraw.Draw(glow)
    for r in range(400, 0, -1):
        alpha = r / 400
        c = lerp_color((0, 0, 0), (30, 22, 6), 1 - alpha)
        gd.ellipse([w * 0.65 - r, h * 0.15 - r, w * 0.65 + r, h * 0.15 + r], fill=c)

    # Blend glow
    from PIL import ImageChops
    img = ImageChops.add(img, glow)

    # Second glow bottom-left
    glow2 = Image.new('RGB', (w, h), (0, 0, 0))
    gd2 = ImageDraw.Draw(glow2)
    for r in range(300, 0, -1):
        alpha = r / 300
        c = lerp_color((0, 0, 0), (18, 14, 5), 1 - alpha)
        gd2.ellipse([w * 0.2 - r, h * 0.8 - r, w * 0.2 + r, h * 0.8 + r], fill=c)
    img = ImageChops.add(img, glow2)

    draw = ImageDraw.Draw(img)

    # Network dots and lines
    random.seed(123)
    points = [(random.randint(0, w), random.randint(0, h)) for _ in range(80)]
    for i, p1 in enumerate(points):
        for p2 in points[i + 1:]:
            dist = math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2)
            if dist < 250:
                alpha = int(20 * (1 - dist / 250))
                gold_dim = tuple(int(c * alpha / 255) for c in GOLD)
                draw.line([p1, p2], fill=gold_dim, width=1)
        draw.ellipse([p1[0] - 2, p1[1] - 2, p1[0] + 2, p1[1] + 2],
                      fill=(GOLD[0] // 4, GOLD[1] // 4, GOLD[2] // 4))

    # Subtle hexagons
    for _ in range(12):
        hx = random.randint(100, w - 100)
        hy = random.randint(100, h - 100)
        hs = random.randint(40, 120)
        draw_hex(draw, hx, hy, hs,
                 (GOLD[0] // 12, GOLD[1] // 12, GOLD[2] // 12), width=1)

    add_noise(img, 8)
    img.save(os.path.join(OUTPUT_DIR, 'hero-bg.jpg'), 'JPEG', quality=85)
    print('✓ hero-bg.jpg')


def create_founder():
    """Professional silhouette placeholder with elegant styling."""
    w, h = 800, 1067  # 3:4 aspect
    img = Image.new('RGB', (w, h), DARK3)
    draw = ImageDraw.Draw(img)

    # Subtle vertical gradient
    for y in range(h):
        t = y / h
        c = lerp_color((18, 18, 22), (8, 8, 10), t)
        draw.line([(0, y), (w, y)], fill=c)

    # Center gold glow behind figure
    from PIL import ImageChops
    glow = Image.new('RGB', (w, h), (0, 0, 0))
    gd = ImageDraw.Draw(glow)
    for r in range(250, 0, -1):
        alpha = r / 250
        c = lerp_color((0, 0, 0), (20, 15, 4), 1 - alpha)
        gd.ellipse([w // 2 - r, h * 0.35 - r, w // 2 + r, h * 0.35 + r], fill=c)
    img = ImageChops.add(img, glow)
    draw = ImageDraw.Draw(img)

    # Stylized person silhouette (head + shoulders)
    cx, cy_head = w // 2, int(h * 0.32)
    head_r = 65

    # Head
    draw.ellipse([cx - head_r, cy_head - head_r, cx + head_r, cy_head + head_r],
                 fill=(22, 22, 26))

    # Shoulders/body
    body_top = cy_head + head_r + 10
    draw.polygon([
        (cx - 160, body_top + 200),
        (cx - 100, body_top),
        (cx + 100, body_top),
        (cx + 160, body_top + 200),
    ], fill=(22, 22, 26))

    # Subtle gold accent line
    draw.line([(w // 2 - 40, h * 0.62), (w // 2 + 40, h * 0.62)],
              fill=(GOLD[0] // 3, GOLD[1] // 3, GOLD[2] // 3), width=1)

    # Label
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Light.ttf", 14)
    except:
        font = ImageFont.load_default()
    draw.text((w // 2, h * 0.68), "IULE MIRANDA", fill=(GOLD[0] // 2, GOLD[1] // 2, GOLD[2] // 2),
              anchor="mm", font=font)
    draw.text((w // 2, h * 0.72), "FOUNDER & CTO", fill=(100, 100, 100),
              anchor="mm", font=font)

    # Bottom gradient fade
    for y in range(int(h * 0.8), h):
        t = (y - h * 0.8) / (h * 0.2)
        alpha = int(255 * t)
        draw.line([(0, y), (w, y)], fill=lerp_color(img.getpixel((0, y))[:3], DARK3, t))

    add_noise(img, 10)
    img.save(os.path.join(OUTPUT_DIR, 'founder-placeholder.jpg'), 'JPEG', quality=85)
    print('✓ founder-placeholder.jpg')


def create_cto_visual():
    """Abstract tech visual - circuit board / hexagonal pattern."""
    w, h = 800, 1067
    img = Image.new('RGB', (w, h), DARK)
    draw = ImageDraw.Draw(img)

    # Base gradient
    for y in range(h):
        t = y / h
        c = lerp_color((12, 12, 16), (6, 6, 8), t)
        draw.line([(0, y), (w, y)], fill=c)

    # Gold glow center
    from PIL import ImageChops
    glow = Image.new('RGB', (w, h), (0, 0, 0))
    gd = ImageDraw.Draw(glow)
    for r in range(350, 0, -1):
        alpha = r / 350
        c = lerp_color((0, 0, 0), (25, 18, 5), 1 - alpha)
        gd.ellipse([w * 0.5 - r, h * 0.4 - r, w * 0.5 + r, h * 0.4 + r], fill=c)
    img = ImageChops.add(img, glow)
    draw = ImageDraw.Draw(img)

    # Hexagonal grid pattern
    hex_size = 45
    rows = h // int(hex_size * 1.5) + 2
    cols = w // int(hex_size * 1.73) + 2

    random.seed(77)
    for row in range(rows):
        for col in range(cols):
            cx = int(col * hex_size * 1.73 + (row % 2) * hex_size * 0.866)
            cy = int(row * hex_size * 1.5)

            dist_center = math.sqrt((cx - w * 0.5) ** 2 + (cy - h * 0.4) ** 2)
            max_dist = math.sqrt(w ** 2 + h ** 2) * 0.5
            intensity = max(0, 1 - dist_center / max_dist)

            if random.random() < 0.7:
                alpha = int(intensity * 40)
                color = (
                    min(255, GOLD[0] * alpha // 255),
                    min(255, GOLD[1] * alpha // 255),
                    min(255, GOLD[2] * alpha // 255),
                )
                draw_hex(draw, cx, cy, hex_size - 3, color, width=1)

            # Random bright nodes
            if random.random() < 0.05 and intensity > 0.3:
                node_alpha = int(intensity * 120)
                node_color = (
                    min(255, GOLD[0] * node_alpha // 255),
                    min(255, GOLD[1] * node_alpha // 255),
                    min(255, GOLD[2] * node_alpha // 255),
                )
                draw.ellipse([cx - 3, cy - 3, cx + 3, cy + 3], fill=node_color)

    # Connecting lines from center
    center = (w // 2, int(h * 0.4))
    random.seed(99)
    for _ in range(20):
        angle = random.uniform(0, 2 * math.pi)
        length = random.randint(100, 350)
        ex = center[0] + int(length * math.cos(angle))
        ey = center[1] + int(length * math.sin(angle))
        draw.line([center, (ex, ey)],
                  fill=(GOLD[0] // 8, GOLD[1] // 8, GOLD[2] // 8), width=1)

    add_noise(img, 8)
    img.save(os.path.join(OUTPUT_DIR, 'cto-visual.jpg'), 'JPEG', quality=85)
    print('✓ cto-visual.jpg')


def create_services_bg():
    """Macro honeycomb texture background."""
    w, h = 1920, 1080
    img = Image.new('RGB', (w, h), DARK2)
    draw = ImageDraw.Draw(img)

    # Base gradient
    for y in range(h):
        t = y / h
        c = lerp_color((10, 10, 12), (4, 4, 5), t)
        draw.line([(0, y), (w, y)], fill=c)

    # Large honeycomb pattern
    hex_size = 80
    rows = h // int(hex_size * 1.5) + 2
    cols = w // int(hex_size * 1.73) + 2

    random.seed(55)
    for row in range(rows):
        for col in range(cols):
            cx = int(col * hex_size * 1.73 + (row % 2) * hex_size * 0.866)
            cy = int(row * hex_size * 1.5)

            # Vary intensity based on position
            dist = math.sqrt((cx - w * 0.5) ** 2 + (cy - h * 0.5) ** 2)
            max_dist = math.sqrt(w ** 2 + h ** 2) * 0.4
            intensity = max(0.1, 1 - dist / max_dist)

            alpha = int(intensity * 50 + random.randint(-5, 5))
            color = (
                min(255, GOLD[0] * alpha // 255),
                min(255, GOLD[1] * alpha // 255),
                min(255, GOLD[2] * alpha // 255),
            )
            draw_hex(draw, cx, cy, hex_size - 4, color, width=1)

            # Some filled hexes with very low opacity
            if random.random() < 0.1:
                fill_alpha = int(intensity * 12)
                fill_color = (
                    min(255, GOLD[0] * fill_alpha // 255),
                    min(255, GOLD[1] * fill_alpha // 255),
                    min(255, GOLD[2] * fill_alpha // 255),
                )
                points = []
                for i in range(6):
                    angle = math.radians(60 * i - 30)
                    px = cx + (hex_size - 8) * math.cos(angle)
                    py = cy + (hex_size - 8) * math.sin(angle)
                    points.append((px, py))
                draw.polygon(points, fill=fill_color)

    # Center glow
    from PIL import ImageChops
    glow = Image.new('RGB', (w, h), (0, 0, 0))
    gd = ImageDraw.Draw(glow)
    for r in range(500, 0, -1):
        alpha = r / 500
        c = lerp_color((0, 0, 0), (15, 11, 3), 1 - alpha)
        gd.ellipse([w // 2 - r, h // 2 - r, w // 2 + r, h // 2 + r], fill=c)
    img = ImageChops.add(img, glow)

    add_noise(img, 6)
    img.save(os.path.join(OUTPUT_DIR, 'services-bg.jpg'), 'JPEG', quality=85)
    print('✓ services-bg.jpg')


def create_results_texture():
    """Gold abstract liquid/flowing texture."""
    w, h = 1200, 1080
    img = Image.new('RGB', (w, h), DARK)
    draw = ImageDraw.Draw(img)

    # Dark base
    for y in range(h):
        t = y / h
        c = lerp_color((10, 10, 12), (5, 5, 6), t)
        draw.line([(0, y), (w, y)], fill=c)

    # Flowing gold streams
    random.seed(42)
    from PIL import ImageChops
    streams = Image.new('RGB', (w, h), (0, 0, 0))
    sd = ImageDraw.Draw(streams)

    for stream_i in range(8):
        base_x = random.randint(w // 4, w)
        amplitude = random.randint(80, 200)
        freq = random.uniform(0.003, 0.008)
        phase = random.uniform(0, math.pi * 2)
        thickness = random.randint(20, 60)
        brightness = random.randint(15, 35)

        points = []
        for y in range(0, h, 2):
            x = base_x + int(amplitude * math.sin(freq * y + phase))
            x += int(30 * math.sin(freq * 2.7 * y + phase * 1.3))
            points.append((x, y))

        for i in range(len(points) - 1):
            x1, y1 = points[i]
            x2, y2 = points[i + 1]
            dist_to_center = abs(y1 - h // 2) / (h // 2)
            local_bright = int(brightness * (1 - dist_to_center * 0.5))
            color = (
                min(255, GOLD[0] * local_bright // 100),
                min(255, GOLD[1] * local_bright // 100),
                min(255, GOLD[2] * local_bright // 100),
            )
            for t in range(-thickness // 2, thickness // 2):
                falloff = 1 - abs(t) / (thickness // 2)
                falloff = falloff * falloff
                fc = tuple(int(c * falloff) for c in color)
                sd.line([(x1 + t, y1), (x2 + t, y2)], fill=fc, width=1)

    streams = streams.filter(ImageFilter.GaussianBlur(radius=8))
    img = ImageChops.add(img, streams)

    # Bright spots
    spots = Image.new('RGB', (w, h), (0, 0, 0))
    spd = ImageDraw.Draw(spots)
    for _ in range(15):
        sx = random.randint(w // 3, w)
        sy = random.randint(0, h)
        for r in range(60, 0, -1):
            alpha = r / 60
            c = lerp_color((0, 0, 0), (30, 22, 6), 1 - alpha)
            spd.ellipse([sx - r, sy - r, sx + r, sy + r], fill=c)
    spots = spots.filter(ImageFilter.GaussianBlur(radius=15))
    img = ImageChops.add(img, spots)

    add_noise(img, 8)
    img.save(os.path.join(OUTPUT_DIR, 'results-texture.jpg'), 'JPEG', quality=85)
    print('✓ results-texture.jpg')


def create_cta_bg():
    """Dark abstract background for CTA section."""
    w, h = 1920, 1080
    img = Image.new('RGB', (w, h), DARK)
    draw = ImageDraw.Draw(img)

    # Gradient base
    for y in range(h):
        t = y / h
        c = lerp_color((10, 10, 14), (6, 6, 8), t)
        draw.line([(0, y), (w, y)], fill=c)

    from PIL import ImageChops

    # Multiple gold glows
    glow = Image.new('RGB', (w, h), (0, 0, 0))
    gd = ImageDraw.Draw(glow)

    glows_data = [
        (w * 0.3, h * 0.7, 350, (22, 16, 4)),
        (w * 0.7, h * 0.3, 300, (18, 13, 3)),
        (w * 0.5, h * 0.5, 500, (10, 7, 2)),
    ]
    for gx, gy, gr, gc in glows_data:
        for r in range(gr, 0, -1):
            alpha = r / gr
            c = lerp_color((0, 0, 0), gc, 1 - alpha)
            gd.ellipse([int(gx - r), int(gy - r), int(gx + r), int(gy + r)], fill=c)

    glow = glow.filter(ImageFilter.GaussianBlur(radius=20))
    img = ImageChops.add(img, glow)
    draw = ImageDraw.Draw(img)

    # Subtle grid lines
    random.seed(33)
    for i in range(0, w, 120):
        offset = random.randint(-20, 20)
        draw.line([(i + offset, 0), (i + offset, h)],
                  fill=(GOLD[0] // 25, GOLD[1] // 25, GOLD[2] // 25), width=1)
    for i in range(0, h, 120):
        offset = random.randint(-20, 20)
        draw.line([(0, i + offset), (w, i + offset)],
                  fill=(GOLD[0] // 25, GOLD[1] // 25, GOLD[2] // 25), width=1)

    # Floating particles
    for _ in range(40):
        px = random.randint(0, w)
        py = random.randint(0, h)
        ps = random.randint(1, 3)
        pa = random.randint(15, 45)
        pc = (GOLD[0] * pa // 255, GOLD[1] * pa // 255, GOLD[2] * pa // 255)
        draw.ellipse([px - ps, py - ps, px + ps, py + ps], fill=pc)

    add_noise(img, 6)
    img.save(os.path.join(OUTPUT_DIR, 'cta-bg.jpg'), 'JPEG', quality=85)
    print('✓ cta-bg.jpg')


def create_og_image():
    """Open Graph social preview image (1200x630)."""
    w, h = 1200, 630
    img = Image.new('RGB', (w, h), DARK)
    draw = ImageDraw.Draw(img)

    # Gradient
    for y in range(h):
        t = y / h
        c = lerp_color((14, 14, 18), (6, 6, 8), t)
        draw.line([(0, y), (w, y)], fill=c)

    # Gold glow
    from PIL import ImageChops
    glow = Image.new('RGB', (w, h), (0, 0, 0))
    gd = ImageDraw.Draw(glow)
    for r in range(300, 0, -1):
        alpha = r / 300
        c = lerp_color((0, 0, 0), (25, 18, 5), 1 - alpha)
        gd.ellipse([w // 2 - r, h // 2 - r, w // 2 + r, h // 2 + r], fill=c)
    glow = glow.filter(ImageFilter.GaussianBlur(radius=20))
    img = ImageChops.add(img, glow)
    draw = ImageDraw.Draw(img)

    # Hex decoration
    for _ in range(8):
        hx = random.randint(50, w - 50)
        hy = random.randint(50, h - 50)
        hs = random.randint(30, 80)
        draw_hex(draw, hx, hy, hs,
                 (GOLD[0] // 10, GOLD[1] // 10, GOLD[2] // 10))

    # Text
    try:
        font_large = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 56)
        font_small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Light.ttf", 22)
    except:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()

    draw.text((w // 2, h * 0.38), "CONNECTAR",
              fill=GOLD, anchor="mm", font=font_large)
    draw.text((w // 2, h * 0.52), "Conexoes inteligentes. Impacto real.",
              fill=(200, 200, 200), anchor="mm", font=font_small)
    draw.text((w // 2, h * 0.62), "Tecnologia  ·  Estrategia  ·  Inteligencia Artificial",
              fill=(120, 120, 120), anchor="mm", font=font_small)

    # Gold accent line
    draw.line([(w // 2 - 60, h * 0.46), (w // 2 + 60, h * 0.46)],
              fill=(GOLD[0] // 2, GOLD[1] // 2, GOLD[2] // 2), width=2)

    add_noise(img, 5)
    img.save(os.path.join(OUTPUT_DIR, '..', 'og-image.png'), 'PNG')
    print('✓ og-image.png')


if __name__ == '__main__':
    print('Generating images for Connectar...\n')
    create_hero_bg()
    create_founder()
    create_cto_visual()
    create_services_bg()
    create_results_texture()
    create_cta_bg()
    create_og_image()
    print('\nDone! All images generated.')
