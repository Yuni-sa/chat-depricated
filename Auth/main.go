package main

import (
	// "github.com/go-redis/redis"
	"github.com/gofiber/fiber/v2"
)

func main() {
	connectDB()

	app := fiber.New()

	setupApp(app)

	app.Listen(":3000")

}
