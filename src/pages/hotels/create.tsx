import Header from '@/components/Shared/Header/Header';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';

const CreateHotel = () => {
  const [files, setFile] = useState<any>([]);
  const [message, setMessage] = useState('');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [baths, setBaths] = useState('');
  const [guests, setGuests] = useState('');
  const [beds, setBeds] = useState('');

  const formData = {
    id: 234,
    title: title,
    description: description,
    price: Number(price),
    baths: Number(baths),
    guests: Number(guests),
    beds: Number(beds),
  };

  const handleFile = (e: any) => {
    setMessage('');
    let file = e.target.files;

    for (let i = 0; i < file.length; i++) {
      const fileType = file[i]['type'];
      const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
      if (validImageTypes.includes(fileType)) {
        setFile([...files, file[i]]);
      } else {
        setMessage('only images accepted');
      }
    }
  };
  const removeImage = (i: any) => {
    setFile(files.filter((x: any) => x.name !== i));
  };

  const addHome = (e: any) => {
    axios.post('/api/homes', formData);
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <section className="">
        <div className="container mx-auto py-16 px-3 lg:px-4">
          <div className="flex justify-center">
            <div className="rounded-lg p-8 shadow-lg lg:p-12 w-full max-w-4xl">
              <h1 className="text-2xl mb-4 lg:mb-8 font-semibold">
                Add Hotels
              </h1>
              <form className="space-y-4" onSubmit={addHome}>
                <div>
                  <label className="sr-only" htmlFor="title">
                    Title
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Title"
                    type="text"
                    id="title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="description">
                    Description
                  </label>

                  <textarea
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Description"
                    rows={8}
                    id="description"
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="price">
                      Price
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Price (in Rs.)"
                      type="number"
                      id="price"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="baths">
                      Baths
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Baths"
                      type="number"
                      id="baths"
                      onChange={(e) => setBaths(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="guests">
                      Guests
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Guests"
                      type="number"
                      id="guests"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="beds">
                      Beds
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Beds"
                      type="number"
                      id="beds"
                      onChange={(e) => setBeds(e.target.value)}
                    />
                  </div>
                </div>
                <div className="rounded-md">
                  <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
                    {message}
                  </span>
                  <div className="h-32 w-full overflow-hidden relative border-2 items-center rounded-md cursor-pointer   border-gray-300 border-dotted border-spacing-10">
                    <input
                      type="file"
                      onChange={handleFile}
                      className="h-full w-full opacity-0 z-10 absolute"
                      multiple={true}
                      name="files[]"
                    />
                    <div className="h-full w-full bg-gray-50 dark:bg-gray-700 absolute z-1 flex justify-center items-center top-0">
                      <div className="flex flex-col">
                        <i className="mdi mdi-folder-open text-[30px] text-gray-400 text-center"></i>
                        <span className="text-[12px]">{`Drag and Drop a file`}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {files.map((file: any, key: any) => {
                      return (
                        <div
                          key={key}
                          className="w-full h-16 flex items-center justify-between rounded p-3"
                        >
                          <div className="flex flex-row items-center gap-2">
                            <div className="h-12 w-12 ">
                              <Image
                                className="w-full h-full rounded"
                                src={URL.createObjectURL(file)}
                                alt="Base Templated Image"
                              />
                            </div>
                            <span className="truncate w-44">{file.name}</span>
                          </div>
                          <div
                            onClick={() => {
                              removeImage(file.name);
                            }}
                            className="h-6 w-6 bg-red-400 text-white flex items-center cursor-pointer justify-center rounded-sm"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Add Hotel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateHotel;
