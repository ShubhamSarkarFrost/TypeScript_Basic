// Define different payment types
type CreditCardPayment = {
    type: "creditCard";
    cardNumber: string;
    cvv: string;
    expiryDate: string;
};

type PayPalPayment = {
    type: "paypal";
    email: string;
};

type CryptoPayment = {
    type: "crypto";
    walletAddress: string;
    currency: "BTC" | "ETH" | "USDT"; // Restrict to known crypto types
};

// Define a union type for all payment methods
type PaymentMethod = CreditCardPayment | PayPalPayment | CryptoPayment;

// Function to process payment
function processPayment(payment: PaymentMethod) {
    switch (payment.type) {
        case "creditCard":
            console.log(`Processing credit card payment with card: ${payment.cardNumber}`);
            break;
        case "paypal":
            console.log(`Processing PayPal payment for email: ${payment.email}`);
            break;
        case "crypto":
            console.log(`Processing crypto payment with wallet: ${payment.walletAddress} in ${payment.currency}`);
            break;
        default:
            console.log("Invalid payment method");
    }
}

// Example Usage
const payment1: PaymentMethod = { type: "creditCard", cardNumber: "1234567890123456", cvv: "123", expiryDate: "12/26" };
const payment2: PaymentMethod = { type: "paypal", email: "user@example.com" };
const payment3: PaymentMethod = { type: "crypto", walletAddress: "0xabc123...", currency: "BTC" };

// Process different payments
processPayment(payment1);
processPayment(payment2);
processPayment(payment3);

