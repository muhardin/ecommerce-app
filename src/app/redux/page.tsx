"use client";
import {
  //   addNote,
  addUser,
  deleteUser,
  removeModal,
  removeNote,
  updateModal,
  updateNote,
} from "@/redux/shoppingSlice";
import { useDispatch, useSelector } from "react-redux";
import { Products, StateProps } from "../../../type";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { productData } from "../constants/data";

const HomePage = (): JSX.Element => {
  const { notes, modal } = useSelector((state: any) => state.shopping);
  const dispatch = useDispatch();

  console.log(modal);
  //   const renderNotes = notes.map((note: any) => (
  //     <div key={note.id}>
  //       <h1>{note.title}</h1>
  //       <p>{note.content}</p>
  //       <button onClick={() => deleteNote(note.id)}>Delete Note</button>
  //     </div>
  //   ));

  return (
    <>
      <div className="flex flex-col gap-4">
        <button onClick={() => dispatch(removeModal())}>Remove</button>
        <button
          onClick={() =>
            dispatch(
              updateModal({
                modal: modal ? !modal.modal : true,
              })
            )
          }
        >
          Enable
        </button>
        <button
          onClick={() =>
            dispatch(
              updateModal({
                modal: false,
              })
            )
          }
        >
          Update Note
        </button>
        <div>{modal?.modal}</div>
      </div>
    </>
  );
};

export default HomePage;
