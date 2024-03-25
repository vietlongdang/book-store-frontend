import React from "react";
import bookImage from "../../../Images/BooksImages/book-luv2code-1000.png";
import BookModel from "../../../models/BookModel.ts";
import { Link } from "react-router-dom";

export const ReturnBook: React.FC<BookModel> = ({ id, title, author, img }) => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        <img src={img || bookImage} width="151" height="233" alt="book" />
        <h6 className="mt-2">{title}</h6>
        <p>{author}</p>
        <Link className="btn bg-primary text-white" to={`/checkout/${id}`}>
          Reserve
        </Link>
      </div>
    </div>
  );
};
