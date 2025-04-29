import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (activeSection === 'home' && count !== 0 && count % 10 === 0) {
      alert(`${count} is divisible by 10`)
    }
  }, [count]);

  const response = {
    page: 1,
    results: [
        {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optioreprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita etcum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt remeveniet architecto",
        image: "https://picsum.photos/500",
        },
        {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolorbeatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae utreiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        image: "https://picsum.photos/500",
        },
        {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi autad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odioet labore et velit aut",
        image: "https://picsum.photos/500",
        },
        {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumendaprovident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsamiure\nquis sunt voluptatem rerum illo velit",
        image: "https://picsum.photos/500",
        },
        {
        userId: 1,
        id: 5,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autemsed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolorneque",
        image: "https://picsum.photos/500",
        },
    ],
  };

//=============================================================================================================

  const renderContactSection = () => (
    <div className="p-8 bg-gray-100 min-h-[calc(100vh-5rem)]">
      <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {response.results.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-700">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
//=============================================================================================================

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <header className="flex justify-evenly h-20 bg-gray-800">
        <div 
          onClick={() => setActiveSection('home')} 
          className="text-white pb-0 pt-10 w-60 hover:bg-white hover:text-black cursor-pointer"
        >home</div>

        <div 
          onClick={() => setActiveSection('contact')} 
          className="text-white pb-0 pt-10 w-60 hover:bg-white hover:text-black cursor-pointer"
        >contact</div>

        <div 
          onClick={() => setActiveSection('about')} 
          className="text-white pb-0 pt-10 w-60 hover:bg-white hover:text-black cursor-pointer"
        >about</div>
      </header>
    
    {/* Render section berdasarkan state */}
    {activeSection === 'home' && (
      <div className="p-8 flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">Counter Demo</h1>
        <p className="text-2xl">{count}</p>
        <div className="flex gap-4">

          <button
            onClick={() => setCount(count - 1)}
            className="bg-blue-300 hover:bg-blue-500 text-black px-4 py-2 rounded"
          >-</button>

          <button
            onClick={() => setCount(0)}
            className="bg-blue-300 hover:bg-blue-500 text-black px-4 py-2 rounded"
          >Reset</button>

          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-300 hover:bg-blue-500 text-black px-4 py-2 rounded"
          >+</button>
          
        </div>
      </div>
    )}

    {activeSection === 'contact' && renderContactSection()}

    {activeSection === 'about' && (
        <div className="p-8">
          <h1>Adi Nugroho (2306208546)</h1>
        </div>
    )}

    </div>
  )

  
}

export default App
