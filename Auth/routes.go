package main

import "github.com/gofiber/fiber/v2"

func setupApp(app *fiber.App) {
	app.Post("/api/register", register)
	app.Post("/api/login", login)
}
