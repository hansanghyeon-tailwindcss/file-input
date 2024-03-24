import './App.css'

function App() {
  return (
    <div className='min-h-[100dvh] w-full flex items-center justify-center'>
      <div className='container px-[20px] grid justify-center gap-y-[20px]'>
        <div className='prose dark:prose-invert'>
          <h1>@hyeon/tailwindcss-file-input</h1>
          <h2>예시</h2>
        </div>
        <div>
          <input type="file" name="" id="" className='file-input' />
        </div>
      </div>
    </div>
  )
}

export default App
