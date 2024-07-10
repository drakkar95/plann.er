


export function App() {
  

  return (
    <div className="h-screen flex items-center justify-center">
       <div className="max-w-3xl w-full px-6 text-center space-y-10">
      <p className="text-zinc-300 text-lg"> Convide seus amigos e planeje sua próxima viagem! </p>
      <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center" >
        <input type="text" placeholder="Para onde você vai?" />
        <input type="text" placeholder="Quando?" />
        <button>Continuar</button>
      </div>
      <p className="text-zinc-500 text-sm">
        Ao planejar sua viagem pela plann.er você automaticamente concorda <br /> 
        com nossos <a className="text-zinc-300 underline" href="a">termos de uso</a> e <a className="text-zinc-300 underline" href="a">politicas de privacidade</a>.
      </p>
    </div>
    </div>
   
  )
}


