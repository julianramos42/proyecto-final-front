import React, { useState } from "react";

export default function CategoriesSelect({ style }) {
  return (
    <>
      <select className={style} name="category">
        <option value="AllCategories">All Categories</option>

        <option value="Clothing and Accessories">
          Clothing and Accessories
        </option>
        <option value="Shoes">Shoes</option>
        <option value="Beauty and Personal Care">
          Beauty and Personal Care
        </option>
        <option value="Electronics">Electronics</option>
        <option value="Home and Garden">Home and Garden</option>
        <option value="Toys and Games">Toys and Games</option>
        <option value="Books and Music">Books and Music</option>
        <option value="Sports and Outdoor Activities">
          Sports and Outdoor Activities
        </option>
        <option value="Food and Beverages">Food and Beverages</option>
        <option value="Pets">Pets</option>
        <option value="Cars and Motorcycles">Cars and Motorcycles</option>
        <option value="Jewelry and Watches">Jewelry and Watches</option>
        <option value="Office Supplies and Stationery">
          Office Supplies and Stationery
        </option>
        <option value="Financial and Banking Services">
          Financial and Banking Services
        </option>
        <option value="Gift and Souvenir Shops">Gift and Souvenir Shops</option>
        <option value="Health and Wellness">Health and Wellness</option>
        <option value="Art and Craft Stores">Art and Craft Stores</option>
        <option value="Technology and Gadgets">Technology and Gadgets</option>
        <option value="Travel and Tourism">Travel and Tourism</option>
        <option value="Second-hand or Thrift Stores">
          Second-hand or Thrift Stores
        </option>
        <option value="Other">Other</option>
      </select>
    </>
  );
}
