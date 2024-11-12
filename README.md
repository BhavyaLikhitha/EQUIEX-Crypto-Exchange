<!-- [![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/DIHvCS29) -->

# VaultX - Trade Crypto, Explore NFTs, Grow Portfolio

## Project Overview

VaultX is an innovative platform designed to provide users with an all-in-one solution for trading cryptocurrency, exploring NFTs, and managing their portfolios. The application is user-friendly and integrates multiple features for an enhanced experience in the world of digital assets. VaultX allows users to track market trends, buy and sell cryptocurrencies, maintain a portfolio, explore NFTs, and stay informed with the latest updates through notifications and blogs.

## Features

### 1. **Landing Page**
   - **Person Logo with Settings**: A personalized user profile section.
   - **Logo**: The VaultX branding.
   - **Buy and Sell**: Quick access to crypto trading options.
   - **Blogs**: Read, add, and delete blogs related to the crypto world.
   - **Notifications**: Receive real-time notifications on price changes, rewards, and milestones.
   - **NFT Gallery**: View and manage your NFTs.
   - **Login/Signup**: Secure user authentication.
   - **Menu**: Easy navigation to all features.

### 2. **Hero Section**
   - A visually appealing section with an image and buttons like **View Portfolio** and **Coin Tracker**.

### 3. **Market Trends Today**
   - Integration with the **CoinGecko API** to display live market trends.
   - A floating chatbot icon on the right for user assistance.

### 4. **Buy and Sell Page**
   - Ticker and search dropdown for quick access to assets.
   - **Live Trading View** chart for real-time market data.
   - Buy/Sell options with **Limit**, **Market**, and **Global USDT** settings.
   - Added transactions are stored in **Order History**, with an option to download.

### 5. **Portfolio Page**
   - Displays the total coin value, quantity, and portfolio worth.

### 6. **Blogs Page**
   - List of blogs with an option to add, delete, or read them.
   - A community sign-up form for users to engage with the content.

### 7. **Coin Tracker Page**
   - Users can add, update, and delete their favorite coins and monitor quantities.

### 8. **Settings Page**
   - Account management options, including user ID, password, privacy settings, and support.

### 9. **NFT Gallery**
   - Users can add, list, delete, and update NFTs along with their values.

### 10. **Notifications**
   - Automated notifications on price tracking, milestones, and rewards like diamonds.

### 11. **Chatbot**
   - A helpful chatbot offering answers to frequently asked questions.

## Team Members

- **Bhavya Likhitha Bukka**: bukka.b@northeastern.edu
- **Akshay Raj Chevala**: chevala.a@northeastern.edu
- **Sneh Patil**: patil.sneh1@northeastern.edu
- **Ayush Ovhal**: ovhal.a@northeastern.edu

## Object Model

Below is the **Domain Driven Design** (DDD) model represented using **Mermaid** for visualizing the entities, value objects, relationships, and cardinality within the VaultX platform.

```mermaid
classDiagram
    class Person {
        +UUID id
        +String name
        +String email
        +String password
        +Settings settings
        +Portfolio portfolio
        +List~Notification~ notifications
        +CoinTracker coinTracker
        +List~OrderHistory~ orderHistory
        +List~NFT~ nfts
        +List~Blog~ blogs
        +List~BuySell~ buysellActions
    }
    
    class Settings {
        +String userId
        +String password
        +Boolean privacy
        +Boolean emailNotifications
        +String securitySettings
        +Boolean logout
        +String help
    }

    class Portfolio {
        +List~Coin~ coins
        +Decimal totalValue
        +String quantity
    }

    class Coin {
        +String symbol
        +Decimal quantity
        +Decimal value
    }

    class OrderHistory {
        +UUID orderId
        +Coin coin
        +Enum type
        +Decimal price
        +Decimal quantity
        +Datetime timestamp
        +String timeRange 
    }

    class Blog {
        +UUID blogId
        +String title
        +String content
        +Person author
        +Datetime timestamp
    }

    class CoinTracker {
        +String userId
        +List~Coin~ coins
        +String price
    }

    class NFT {
        +UUID nftId
        +Person owner
        +Decimal value
        +Enum status
        +String metadata
    }

    class Notification {
        +UUID notificationId
        +String message
        +Datetime timestamp
    }

    class BuySell {
        +UUID actionId
        +Coin coin
        +Enum type
        +Decimal price
        +Decimal quantity
        +Enum status
        +Datetime timestamp
    }

    class Login {
        +UUID loginId
        +String email
        +String password
        +Datetime timestamp
    }

    class Signup {
        +UUID signupId
        +String name
        +String email
        +String password
        +Datetime timestamp
    }

    class Menu {
        +UUID menuId
        +List~String~ menuItems
    }

    class MarketTrendsToday {
        +UUID marketId
        +List~CoinStats~ coinStats
        +Datetime timestamp
    }

    class CoinStats {
        +UUID coinId
        +String coinSymbol
        +Decimal currentPrice
        +Decimal 24hChange
        +Decimal marketCap
    }

    class ChatBot {
        +UUID chatbotId
        +String question
        +String answer
    }

    Person "1" --> "1" Portfolio : has
    Person "1" --> "0..*" CoinTracker : tracks
    Person "1" --> "0..*" Blog : creates
    Person "1" --> "0..*" NFT : owns
    Person "1" --> "0..*" Notification : receives
    Person "1" --> "0..*" OrderHistory : has
    Person "1" --> "0..*" BuySell : initiates
    Coin "1" --> "0..*" OrderHistory : part of
    Blog "0..*" --> "1" Person : authored by
    NFT "0..*" --> "1" Person : owned by
    BuySell "0..*" --> "1" Coin : involves
    BuySell "0..*" --> "1" Person : performed by
    Login "1" --> "1" Person : login credentials
    Signup "1" --> "1" Person : signup information
    Menu "1" --> "0..*" Person : accessible by
    MarketTrendsToday "1" --> "0..*" CoinStats : tracks
    Settings "1" --> "1" Person : connected to
    ChatBot "0..*" --> "1" Person : assists
    CoinTracker "1" --> "0..*" CoinStats : contains

