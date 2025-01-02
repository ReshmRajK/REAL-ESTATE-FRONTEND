

function CeateListing() {
    return (
        <main className="p-3 max-w-4xl mx-auto">

            <h1 className="text-center text-3xl font-semibold my-7">Create a Listing</h1>
            <form className="flex flex-col sm:flex-row gap-4">

                <div className="flex flex-col gap-4 flex-1">
                    <input className="rounded-lg border p-3" type="text" name="name" placeholder="Name" maxLength='62' minLength='10' required />
                    <textarea className="rounded-lg border p-3" type='text' name="description" placeholder="Description" required />
                    <input className="rounded-lg border p-3" type="text" name="address" placeholder="Address" required />
                


                {/* for check box */}
                <div className="flex flex-wrap gap-6 ">
                    <div className="flex  gap-2">
                        <input type="checkbox" name="sale" className="w-5" />
                        <span>Sell</span>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" name="rent" className="w-5" />
                        <span>Rent</span>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" name="parking" className="w-5" />
                        <span>Parking Spot</span>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" name="furnished" className="w-5" />
                        <span>Furnished</span>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" name="offer" className="w-5" />
                        <span>Offer</span>
                    </div>

                </div>

                {/* for bath,bed etc */}

                <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-2">
                        <input type="number" name="bedrooms" min='1' max='10' className="p-3 border border-gray-500 rounded-lg" />
                        <p>Beds</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="number" name="bathrooms" min='1' max='10' className="p-3 border border-gray-500 rounded-lg" />
                        <p>Baths</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="number" name="regularPrice" min='1' max='10' className="p-3 border border-gray-500 rounded-lg" />
                        <div className="flex flex-col items-center">
                            <p>Regular Price</p>
                            <span className="text-xs">($ /Month)</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="number" name="discountPrice" min='1' max='10' className="p-3 border border-gray-500 rounded-lg" />
                        <div className="flex flex-col items-center">
                            <p>Discount Price</p>
                            <span className="text-xs">($ /Month)</span>
                        </div>
                    </div>
                </div>
                </div>

                <div className="flex flex-col gap-4 flex-1 gap-4">
                    <p className="font-semibold ">Images :
                        <span className="text-gray-600 ml-2">The first image will be the cover image(max 6)</span>
                    </p>

                    <div className="flex gap-4">
                        <input type="file" name="imageURLs" accept="image/*" multiple 
                        className="border border-gray-300 p-3 rounded w-full"  />
                        <button className="border rounded p-3 border-green-700 text-green-700 
                        hover:shadow-lg disabled:opacity-80">UPLOAD</button>
                      
                    </div>
                    <button className="bg-slate-700 rounded-lg p-3 text-white
                    hover:opacity-95 disabled:opacity-80">CREATE LISTING</button>

                </div>

            </form>

        </main>
    )
}

export default CeateListing
