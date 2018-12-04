package main

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
)

type Ticket struct {
	Symbol   string `json:"symbol"`
	OrderQty int    `json:"orderQty"`
	OrdType  string `json:"ordType"`
}

func main() {
	hs := calculateHash()
	fmt.Println(hs)
}

func calculateHash() string {

	apiSecret := "xxxxxxxxxxxxxxxxxxxxxxxx"
	verb := "POST"
	path := "/api/v1/order"
	ticket := Ticket{Symbol: "XBTUSD", OrderQty: 1, OrdType: "Market"}
	data, _ := json.Marshal(ticket)

	secret := []byte(apiSecret)
	message := []byte(verb + path + string(data))

	hash := hmac.New(sha256.New, secret)
	hash.Write([]byte(message))

	return hex.EncodeToString(hash.Sum(nil))
}
