import pygame, random

# config var
WIDTH = 800
clock = pygame.time.Clock()

# display
screen = pygame.display.set_mode((WIDTH, WIDTH))
pygame.display.set_caption('A* Pathfinding Algorithm')

#colors
BLACK = (0,0,0)
GREEN = (0,255,0)
RED = (255,0,0)
WHITE = (255,255,255)
PURPLE = (153,50,204)
ORANGE = (255,165,0)
TEAL = (0,255,255)
GREY = (100,100,100)

# fonts
pygame.font.init()
font = pygame.font.SysFont("comicsans", 50)

# settings
gridSize = 16
gameSpeed = 30
gridDimensions = WIDTH // gridSize

class Spot:
    def __init__(self, row, col):
        self.row = row
        self.col = col
        self.x = row * gridSize
        self.y = col * gridSize
        self.color = WHITE
        self.neighbors = []
    
    def getPosition(self):
        return(self.row, self.col)

    def isClosed(self):
        return(self.color == RED)

    def isOpen(self):
        return(self.color == GREEN)

    def isBarrier(self):
        return(self.color == BLACK)

    def isStart(self):
        return(self.color == ORANGE)
    
    def isEnd(self):
        return(self.color == TEAL)

    def isPath(self):
        return(self.color == PURPLE)

    def reset(self):
        self.color = WHITE

    def makeClosed(self):
        self.color = RED

    def makeOpen(self):
        self.color = GREEN

    def makeBarrier(self):
        self.color = BLACK

    def makeStart(self):
        self.color = ORANGE

    def makeEnd(self):
        self.color = TEAL

    def makePath(self):
        self.color = PURPLE

    def draw(self, window):
        pygame.draw.rect(screen, self.color, (self.x, self.y, gridSize, gridSize))

    def updateNeighbors(self, grid):
        self.neighbors = []

        # going down
        if self.row < gridDimensions - 1 and not grid[self.row+1][self.col].isBarrier():
            self.neighbors.append(grid[self.row + 1][self.col])
        # going up
        if self.row > 0 and not grid[self.row-1][self.col].isBarrier():
            self.neighbors.append(grid[self.row-1][self.col])
        # going right
        if self.col < gridDimensions - 1 and not grid[self.row][self.col+1].isBarrier():
            self.neighbors.append(grid[self.row][self.col+1])
        # going left
        if self.col > 0 and not grid[self.row][self.col-1].isBarrier():
            self.neighbors.append(grid[self.row][self.col-1])

    def __lt__(self, other):
        return(False)

# heuristic function
def h(p1, p2):
    x1, y1 = p1
    x2, y2 = p2
    return(abs(x1 - x2) + abs(y1 - y2))

def reconstructPath(cameFrom, current, draw, start, end):
    # goes thru the found path and draws it all
    while current in cameFrom:
        current.makePath()
        if current == start:
            current.makeStart()
        elif current == end:
            current.makeEnd()
        current = cameFrom[current]
        draw()

def algorithm(draw, grid, start, end):

    currentNode = start

    # main algorithm loop
    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()

        # bam pancakes
        if currentNode == end:
            reconstructPath(cameFrom, end, draw, start, end)
            return True

        for neighbor in current.neighbors:
            tempGScore = gScore[current] + 1

            if tempGScore < gScore[neighbor]:
                cameFrom[neighbor] = current
                gScore[neighbor] = tempGScore
                fScore[neighbor] = tempGScore + h(neighbor.getPosition(), end.getPosition())
                # add into open set hash if not already there
                if neighbor not in openSetHash:
                    count += 1
                    openSet.put((fScore[neighbor], count, neighbor))
                    openSetHash.add(neighbor)
                    neighbor.makeOpen()

        draw()

        if current != start:
            current.makeClosed()

    return False


def makeGrid():
    grid = []
    for i in range(gridDimensions):
        grid.append([])
        for j in range(gridDimensions):
            grid[i].append(Spot(i, j))
    return(grid)

def drawGrid(screen, grid):
    for i in range(gridDimensions):
        pygame.draw.line(screen, GREY, (0, i * gridSize), (WIDTH, i * gridSize))
    for j in range(gridDimensions):
        pygame.draw.line(screen, GREY, (j * gridSize, 0), (j * gridSize, WIDTH))

def draw(screen, grid):
    screen.fill(WHITE)
    for row in grid:
        for spot in row:
            spot.draw(screen)
    drawGrid(screen, grid)
    pygame.display.update()

def getClickedPosition(position):
    y, x = position
    row = y // gridSize
    col = x // gridSize
    return(row, col)

def main(win):
    grid = makeGrid()
    start = None
    end = None

    run = True

    while run:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False

            # left mouse
            if pygame.mouse.get_pressed()[0]:
                clickPosition = pygame.mouse.get_pos()
                row, col = getClickedPosition(clickPosition)
                spot = grid[row][col]
                if not start and end != spot:
                    start = spot
                    start.makeStart()
                elif not end and start != spot:
                    end = spot
                    end.makeEnd()
                elif spot != end and spot != start:
                    spot.makeBarrier()


            # right mouse
            elif pygame.mouse.get_pressed()[2]:
                clickPosition = pygame.mouse.get_pos()
                row, col = getClickedPosition(clickPosition)
                spot = grid[row][col]
                spot.reset()
                if spot == start:
                    start = None
                elif spot == end:
                    end = None

            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_SPACE and start and end:
                    started = True
                    
                    # getting neighbors of elements
                    for row in grid:
                        for spot in row:
                            spot.updateNeighbors(grid)
                            if spot.isOpen():
                                spot.reset()
                            elif spot.isClosed():
                                spot.reset()
                            elif spot.isPath():
                                spot.reset()

                    # calling the actual algorithm
                    algorithm(lambda: draw(screen, grid), grid, start, end)

                if event.key == pygame.K_c:
                    start = None
                    end = None
                    grid = makeGrid()

        draw(screen, grid)


    pygame.quit()

if __name__ == "__main__":
    main(screen)