# REST API Endpoints Specifications

## 1. User Authentication and Profile Management
- **POST /auth/signup** – Register a new user.
- **POST /auth/login** – Log in a user (authenticate).
- **GET /users/{userId}** – Get user profile details.
- **PUT /users/{userId}** – Update user profile information.

## 2. Settings Management
- **GET /settings/{userId}** – Retrieve the user’s settings.
- **PUT /settings/{userId}** – Update the user’s settings (password, privacy settings, notifications).
- **POST /settings/logout** – Log out the user.

## 3. Portfolio Management
- **GET /portfolio/{userId}** – Get the user's portfolio with coin details and total value.
- **PUT /portfolio/{userId}** – Update the portfolio (e.g., adding/removing coins).

## 4. Coin Management
- **GET /coins** – List all available coins.
- **GET /coins/{coinSymbol}** – Get details about a specific coin.
- **POST /coins** – Add a new coin to the system (if applicable for a new coin type).
- **GET /coin-tracker/{userId}** – Get a user's coin tracker with price and coin details.
- **POST /coin-tracker/{userId}** – Add a coin to the user's coin tracker.
- **PUT /coin-tracker/{userId}/{coinId}** – Update coin in tracker (e.g., change price).
- **DELETE /coin-tracker/{userId}/{coinId}** – Remove a coin from the coin tracker.

## 5. Order History Management
- **GET /order-history/{userId}** – Retrieve the user's order history (buy/sell actions).
- **GET /order-history/{userId}/{orderId}** – Get details of a specific order in the user's history.

## 6. Buy and Sell Actions
- **POST /buysell** – Initiate a buy or sell order.
- **GET /buysell/{userId}** – Get the user's buy/sell actions.
- **GET /buysell/{userId}/{actionId}** – Get details of a specific buy/sell action.

## 7. NFT Management
- **GET /nfts** – Retrieve all NFTs.
- **GET /nfts/{nftId}** – Get details of a specific NFT.
- **POST /nfts** – Create or mint a new NFT.
- **PUT /nfts/{nftId}** – Update an NFT (e.g., change ownership, value).
- **DELETE /nfts/{nftId}** – Delete an NFT.
- **GET /nfts/owned/{userId}** – Get NFTs owned by a user.

## 8. Blogs Management
- **GET /blogs** – Retrieve all blogs.
- **GET /blogs/{blogId}** – Get a specific blog by ID.
- **POST /blogs** – Create a new blog post.
- **PUT /blogs/{blogId}** – Update an existing blog post.
- **DELETE /blogs/{blogId}** – Delete a blog post.
- **GET /blogs/author/{userId}** – Get all blogs authored by a user.

## 9. Notifications
- **GET /notifications/{userId}** – Get all notifications for a user.
- **POST /notifications** – Create a new notification (can be used to send notifications like transaction updates).

## 10. Market Trends
- **GET /market-trends/today** – Get today's market trends, including price changes and statistics for coins.
- **GET /market-trends/{coinId}** – Get the market trend details for a specific coin.
- **GET /market-trends/{userId}** – Get the user's preferred market trends or coin stats.

## 11. Chatbot
- **GET /chatbot/questions** – Retrieve the list of available questions for the chatbot.
- **POST /chatbot/questions** – Submit a question to the chatbot and get an answer.
- **GET /chatbot/{userId}** – Retrieve chat history or questions answered by the chatbot for a specific user.

## 12. Person Management
- **GET /persons/{personId}**: Returns the Person object.
- **PUT /persons/{personId}**: Takes a PersonUpdate object in the request body for updating details and returns the updated Person object.
- **DELETE /persons/{personId}**: Deletes the person and returns a 204 No Content status on success.
