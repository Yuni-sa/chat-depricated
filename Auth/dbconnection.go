package main

import (
	"encoding/json"
	"log"

	"github.com/go-redis/redis"
)

var rdb *redis.Client

func connectDB() {
	// defines redis connection
	var rdb = redis.NewClient(&redis.Options{
		Addr: "localhost:6379",
		// Addr:     "redis:6379",
		Password: "",
		DB:       1,
	})

	// simple ping / connection check
	pong, err := rdb.Ping().Result()
	log.Println(pong, err)
}
s
func sendToRedis(user User) {
	// parses the JSON-encoded data into json var
	json, err := json.Marshal(user)
	if err != nil {
		panic(err)
	}

	// pushes the message to redis
	if err := rdb.RPush("chat_messages", json).Err(); err != nil {
		panic(err)
	}
}

func getFromRedis(user User) {
	val, _ := rdb.Get(ctx, "key").Result()
	return val
}
