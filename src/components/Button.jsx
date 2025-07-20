import { IoRocketSharp } from "react-icons/io5";

export default function Button({ text }) {
  return (
    <button
      class="
        group
        p-5
        cursor-pointer 
        relative  
        text-xl 
        font-normal 
        border-1
        flex 
        items-center 
        text-primary
        justify-center
        bg-transparent
         h-auto  
         w-[170px]  
         overflow-hidden   
         transition-all
         duration-100"
    >
      <span
        class="
        group-hover:w-full
        absolute 
        left-0 
        h-full 
        w-5 
        border-y
        border-l
         border-primary
           transition-all
         duration-500"
      ></span>

      <p
        class="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
         duration-200"
      >
        {text}
      </p>

      <span class="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200 flex items-center gap-2">
        Go <IoRocketSharp />
      </span>

      <span class="group-hover:w-full absolute right-0 h-full w-5  border-y border-r border-primary transition-all duration-500"></span>
    </button>
  );
}
