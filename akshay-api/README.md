# AKSHAY REST API

## Buy and Sell API

This API provides endpoints for buying, selling, and managing transactions.

## Endpoints

### 1. **Buy Coin**
  - **URL**: `/orders/users/:email/coins/buy`  
  - **Method**: `POST`  

### 2. **Sell Coin**
  - **URL**: `/orders/users/:email/coins/sell` 
  - **Method**: `POST`  

### 3. **Get Order History**
  - **URL**: `/orders/users/:email/order-history` 
  - **Method**: `GET`  

## NFT GALLERY API

## Endpoints

### 1. **Retrieve all NFTs**
   - **URL**: `/nfts`
   - **Method**: `GET`

### 2. **Mint a new NFT**
   - **URL**: `/nfts`
   - **Method**: `POST`

### 3. **View a specific NFT**
   - **URL**: `/nfts/{id}`
   - **Method**: `GET`

### 4. **Update an NFT**
   - **URL**: `/nfts/{id}`
   - **Method**: `PUT`

### 5. **Delete an NFT**
   - **URL**: `/nfts/{id}`
   - **Method**: `DELETE`