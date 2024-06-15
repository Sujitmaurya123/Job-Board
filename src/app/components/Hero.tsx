
export default function Hero(){
    return(
      <section className="my-16 container">
        <h1 className="text-4xl font-bold text-center ">
            Find your next<br/>dream job
        </h1>
        <p className="text-center text-gray-600 mt-2">
            Discover your next career opportunity with us.
             We offer a wide range of job listings across various
              industries to match your skills and aspirations. Start 
              your job search today and take the next step toward your dream job!
        </p>
        <form className="flex gap-2 mt-4 max-w-md mx-auto" >
            <input type="search" className="border border-gray-400 w-full py-2 px-3 rounded-md"
             placeholder="Search phrase..." />
             <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Search</button>
        </form>
      </section>
    )
}