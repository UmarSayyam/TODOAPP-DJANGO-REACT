import React from "react";
import { MdDeleteForever, MdEditNote, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';

const Table = () => {






  return(
   <div className="py-32">
    <table className="w-11/12 max-w-4xl">
        <thead className="border-b-2 border-black">
            <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">Check Box</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">To Do</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">Status</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">Data Created</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="p-3 ">
                    <span className="inline-block cursor-pointer"><MdOutlineCheckBox /></span>
                </td>
                <td className="p-3 text-sm">Lorem ipsum dolar sit.</td>
                <td className="p-3 text-sm text-center">
                    <span className="p-1.5 text-xs font-medium tracking-wider rounded-md bg-green-300">Done</span>
                </td>
                <td className="p-3 text-sm">24-11-2002</td>
                <td className="p-3 text-sm font-medium flex items-center gap-4">
                    <span className="text-2xl cursor-pointer text-blue-500 hover:text-blue-700"><MdEditNote /></span>
                    <span className="text-2xl cursor-pointer text-red-500 hover:text-red-700"><MdDeleteForever /></span>
                </td>
            </tr>
            <tr>
                <td className="p-3 ">
                    <span className="inline-block cursor-pointer"><MdOutlineCheckBox /></span>
                </td>
                <td className="p-3 text-sm">Lorem ipsum dolar sit.</td>
                <td className="p-3 text-sm text-center">
                    <span className="p-1.5 text-xs font-medium tracking-wider rounded-md bg-green-300">Done</span>
                </td>
                <td className="p-3 text-sm">24-11-2002</td>
                <td className="p-3 text-sm font-medium flex items-center gap-4">
                    <span className="text-2xl cursor-pointer text-blue-500 hover:text-blue-700"><MdEditNote /></span>
                    <span className="text-2xl cursor-pointer text-red-500 hover:text-red-700"><MdDeleteForever /></span>
                </td>
            </tr>
            <tr>
                <td className="p-3 ">
                    <span className="inline-block cursor-pointer"><MdOutlineCheckBox /></span>
                </td>
                <td className="p-3 text-sm">Lorem ipsum dolar sit.</td>
                <td className="p-3 text-sm text-center">
                    <span className="p-1.5 text-xs font-medium tracking-wider rounded-md bg-green-300">Done</span>
                </td>
                <td className="p-3 text-sm">24-11-2002</td>
                <td className="p-3 text-sm font-medium flex items-center gap-4">
                    <span className="text-2xl cursor-pointer text-blue-500 hover:text-blue-700"><MdEditNote /></span>
                    <span className="text-2xl cursor-pointer text-red-500 hover:text-red-700"><MdDeleteForever /></span>
                </td>
            </tr>
            <tr>
                <td className="p-3 ">
                    <span className="inline-block cursor-pointer"><MdOutlineCheckBox /></span>
                </td>
                <td className="p-3 text-sm">Lorem ipsum dolar sit.</td>
                <td className="p-3 text-sm text-center">
                    <span className="p-1.5 text-xs font-medium tracking-wider rounded-md bg-green-300">Done</span>
                </td>
                <td className="p-3 text-sm">24-11-2002</td>
                <td className="p-3 text-sm font-medium flex items-center gap-4">
                    <span className="text-2xl cursor-pointer text-blue-500 hover:text-blue-700"><MdEditNote /></span>
                    <span className="text-2xl cursor-pointer text-red-500 hover:text-red-700"><MdDeleteForever /></span>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
  )
}

export default Table;
