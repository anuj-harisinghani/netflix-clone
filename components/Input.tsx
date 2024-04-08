const Input = () => {
    return ( 
        <div className="relative">
            <input                                             
                id="email"                                      
                className="
                    block
                    rounded-md
                    px-6
                    pt-6
                    pb-1
                    w-full
                    text-md
                    text-white
                    bg-neutral-700
                    appearance-none
                    focus:outline-none
                    focus:ring-0
                    peer                                        {/* peer here allows connection to the peer functions below in the label*/}
                "
                placeholder=" "
            />
            <label className="                                  {/* label is the class which shows some placeholder value in the input field, but here we are moving the label around wiht animation */}
                absolute
                text-md
                text-zinc-400
                duration-150                                    {/* controls the time it takes for animation of the placeholder to move out of the way */}
                transform
                -translate-y-3
                scale-75
                top-4
                z-10
                origin-[0]
                left-6
                peer-placeholder-shown:scale-100                {/*peer functions control what happens when focus is made, shown is how it is before focus, focus: controls what change to make when focus of mouse is done*/}
                peer-placeholder-shown:translate-y-0
                peer-focus:scale-75
                peer-focus:-translate-y-3
            "
            htmlFor="email">
                Email
            </label>
        </div>
    )
}

export default Input;