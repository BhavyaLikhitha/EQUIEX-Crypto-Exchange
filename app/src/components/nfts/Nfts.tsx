import React, { useState } from "react";
import './nfts.css';
import Header from "../common/Header";
import Footer from "../common/Footer";
import nftimage from '../../assets/nft image.jpg';
import bored from '../../assets/bored.jpeg';
import punks from '../../assets/punks.jpg';
import nfts from '../../assets/nfts.jpeg';
import penguin from '../../assets/penguin.png';
import milady from '../../assets/milady.jpeg';
import ntc from '../../assets/ntc.jpeg';
import azuki from '../../assets/azuki.jpeg';
import mintu from '../../assets/mintu.jpg';
import my1 from '../../assets/my1.jpg';
import my2 from '../../assets/my2.jpg';
import my3 from '../../assets/my3.jpg';
import my4 from '../../assets/my4.jpg';
import my5 from '../../assets/panda.jpg';
import my6 from '../../assets/cat.jpg';
import my7 from '../../assets/money.jpg';
import { toast, ToastContainer } from "react-toastify";
const Nfts = () => {
  const [myNFTs, setMyNFTs] = useState([
    { id: 1, image: my1, name: "CryptoArt", platform: "OpenSea", price: "$15,000", data: "Rare" },
    { id: 2, image: my2, name: "Digital Galaxy", platform: "Rarible", price: "$2,500", data: "Fantasy" },
    { id: 3, image: my3, name: "Panda Party", platform: "NFT Gallery", price: "$98,789", data: "Common" },
    { id: 4, image: my4, name: "Robo Metaverse", platform: "Rarible", price: "$250", data: "Epic" },
    { id: 5, image: my5, name: "Cutie Panda", platform: "Open Sea", price: "$12000", data: "Super Rare" },
    { id: 6, image: my6, name: "Kitty Cat", platform: "Blur NFT", price: "$9999", data: "Common Epic" },
    { id: 7, image: my7, name: "Happy Monkey", platform: "NFT Gallery", price: "$14550", data: "Epic Fantasy" },

  ]);
  const [editId, setEditId] = useState<number | null>(null);
  const [editFields, setEditFields] = useState({ name: "", price: "", data: "" });
  const [isMinting, setIsMinting] = useState(false);
  const [mintFields, setMintFields] = useState({ name: "", price: "", data: "", image: null });

  const topCollections = [
    { id: 1, image: punks, name: "Crypto Punks", platform: "OpenSea", price: "$168,265" },
    { id: 2, image: bored, name: "Bored Ape Yatch Club", platform: "OpenSea", price: "$80,939" },
    { id: 3, image: penguin, name: "Pudgy Penguins", platform: "Rarible", price: "$75,151" },
    { id: 4, image: nfts, name: "Mutant Ape Yatch Club", platform: "Rarible", price: "$14,746.73" },
    { id: 5, image: milady, name: "Milady Maker", platform: "NFT Gallery", price: "$25,642" },
    { id: 6, image: azuki, name: "Azuki", platform: "Rarible", price: "$24,805" },
    { id: 7, image: penguin, name: "Lil Pdugys", platform: "Rarible", price: "$7,605.79" },
    { id: 8, image: ntc, name: "Bitcoin Puppets", platform: "NFT Gallery", price: "$15,216.34" },

  ];

  const handleMintNFT = () => {
    setIsMinting(true);
  };
  const handleMintChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === "image" && files) {
      const reader = new FileReader();
      reader.onload = () => {
        setMintFields((prev:any) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setMintFields((prev) => ({ ...prev, [name]: value }));
    }
  };  

  const handleMintSubmit = () => {
    if (!mintFields.name || !mintFields.price || !mintFields.data || !mintFields.image) {
      alert("Please fill out all fields to mint an NFT.");
      return;
    }

    const newNFT = {
      id: myNFTs.length + 1,
      image: mintFields.image,
      name: mintFields.name,
      platform: "Custom Mint",
      price: mintFields.price,
      data: mintFields.data,
    };

    setMyNFTs((prevNFTs) => [...prevNFTs, newNFT]);
    setIsMinting(false);
    setMintFields({ name: "", price: "", data: "", image: null });
    toast.success("NFT minted successfully!");
  };

  const handleEditNFT = (id: number) => {
    const nft = myNFTs.find((n) => n.id === id);
    if (nft) {
      setEditId(id);
      setEditFields({ name: nft.name, price: nft.price, data: nft.data });
    }
  };
  const handleSaveNFT = () => {
    setMyNFTs((prevNFTs) =>
      prevNFTs.map((nft) =>
        nft.id === editId ? { ...nft, ...editFields } : nft
      )
    );
    setEditId(null);
    setEditFields({ name: "", price: "", data: "" });
    toast.success("NFT updated successfully!");
  };
  const handleDeleteNFT = (id: number) => {
    setMyNFTs((prevNFTs) => prevNFTs.filter((nft) => nft.id !== id));
    toast.success("NFT deleted successfully!");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditFields((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <Header />
      <div className="nft-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="text-content">
            <h1 className="nft-head">Your Unique Path to <span className="nft-span">Digital Ownership</span></h1>
            <p className="nft-p">
              Showcase your creativity and express yourself through unique digital assets. Embrace the digital revolution
              and own a piece of unique art or collectible.
            </p>
            <button className="get-started-btn">Get Started Now</button>
          </div>
          <div className="hero-image">
            <img src={nftimage} alt="Digital Ownership" />
          </div>
        </section>
 {/* Top Collections */}
      <section className="top-collections">
        <h2 className="nft-h2">Explore the<span className="top-n">Top NFT Collections</span></h2>
        <div className="collect-grid">
          {topCollections.map((collect) => (
            <div key={collect.id} className="collect-card">
              <img className='nft-img' src={collect.image} alt={collect.name} />
              <h3 className="n-name">{collect.name}</h3>
              <p className="n-plat">Platform: {collect.platform}</p>
              <p className="n-price">Price: {collect.price}</p>
            </div>
          ))}
        </div>
      </section>

       {/* Mint Your Own NFT */}
      <section className="mint-section">
        <div className="mint-image">
          <img className='mint-img' src={mintu} alt="Mint NFT" />
        </div>
        <div className="mint-content">
          <h2 className="mint-n">Mint Your Own NFT</h2>
          <p className="mint-p">Follow these simple steps to create and mint your own NFT:</p>
          <ul>
            <li className="mint-l">Choose your digital asset</li>
            <li className="mint-l">Set metadata and properties</li>
            <li className="mint-l">Submit and mint your NFT</li>
        </ul>
        {isMinting && (
            <div className="mint-form">
              <h3>Mint Your NFT</h3>
              <input
                type="text"
                name="name"
                value={mintFields.name}
                onChange={handleMintChange}
                placeholder="Name"
              />
              <input
                type="text"
                name="price"
                value={mintFields.price}
                onChange={handleMintChange}
                placeholder="Price"
              />
              <input
                type="text"
                name="data"
                value={mintFields.data}
                onChange={handleMintChange}
                placeholder="Metadata"
              />
              <input
                type="file"
                name="image"
                onChange={handleMintChange}
              />
              <button className="mint-btn" onClick={handleMintSubmit}>Create</button>
            </div>
          )}
         <button className="mint-btn" onClick={handleMintNFT}>
           Mint NFT
          </button>
        </div>
      </section>

        {/* My NFTs */}
        <section className="top-collections">
          <h2 className="my-c">My <span className="my-cf">NFTs Collection</span></h2>
          <div className="collect-grid">
            {myNFTs.map((nft) => (
              <div key={nft.id} className="coll-card">
                <img className="nf-img" src={nft.image} alt={nft.name} />
                {editId === nft.id ? (
                  <div className="edit-fields">
                    <input
                      type="text"
                      name="name"
                      value={editFields.name}
                      onChange={handleChange}
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      name="price"
                      value={editFields.price}
                      onChange={handleChange}
                      placeholder="Price"
                    />
                    <input
                      type="text"
                      name="data"
                      value={editFields.data}
                      onChange={handleChange}
                      placeholder="Data"
                    />
                    <button className="mint-btn" onClick={handleSaveNFT}>
                      Save
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="n-name">{nft.name}</h3>
                    <p className="n-plat">Platform: {nft.platform}</p>
                    <p className="n-price">Price: {nft.price}</p>
                    <p>Data: {nft.data}</p>
                    <div className="card-actions">
                      <button className="mint-btn" onClick={() => handleEditNFT(nft.id)}>Edit</button>
                      <button className="mint-btn" onClick={() => handleDeleteNFT(nft.id)}>Delete</button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000}/>
    </div>   
  );
};
export default Nfts;

