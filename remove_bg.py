from PIL import Image
import numpy as np

def remove_black_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)
    
    # Define what is considered "black" (background)
    # We'll treat pixels close to black as transparent
    threshold = 30
    r, g, b, a = data.T
    
    # Identify black pixels
    black_areas = (r < threshold) & (g < threshold) & (b < threshold)
    
    # Set alpha to 0 for black pixels
    data[..., 3][black_areas.T] = 0
    
    # Create new image
    new_img = Image.fromarray(data)
    new_img.save(output_path)
    print(f"Processed image saved to {output_path}")

if __name__ == "__main__":
    remove_black_background("/home/ubuntu/upload/logos/2.png", "/home/ubuntu/newsletter_pro_landing/client/public/images/logo_final.png")
