import pygame
import sys

# Initialize Pygame
pygame.init()

# Screen setup
screen = pygame.display.set_mode((800, 600))
pygame.display.set_caption("Ending Page")

# Colors
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)

# Font
font = pygame.font.Font(None, 74)

# Render text
text = font.render("Game Over", True, WHITE)
text_rect = text.get_rect(center=(400, 300))

# Main loop
running = True
while running:
    screen.fill(BLACK)
    screen.blit(text, text_rect)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    pygame.display.flip()

pygame.quit()
sys.exit()
import turtle

# Screen setup
screen = turtle.Screen()
screen.setup(width=800, height=600)
screen.bgcolor("black")
screen.title("Ending Page")

# Drawing text
pen = turtle.Turtle()
pen.hideturtle()
pen.color("white")
pen.penup()
pen.goto(0, 0)
pen.write("The End", align="center", font=("Arial", 36, "bold"))

# Wait before closing
screen.mainloop()
