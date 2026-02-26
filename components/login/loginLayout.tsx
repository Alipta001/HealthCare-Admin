// import LoginForm from './loginForm'

// export default function LoginLayout() {
//   return (
//     <div className="adminLoginLayout">
//         <div className="container">
//             <div className="loginHeader">
//                 <h1>ADMIN</h1>
//                 <p>Please Login</p>
//             </div>
//             <div className="image">
//                 <img src="profile-icon.png" alt="Login Image" />
//             </div>        
//         </div>
//       <LoginForm />
//     </div>
//   )
// }


import LoginForm from './loginForm'

export default function LoginLayout() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      <img 
        src="/images/login/admin2.jpeg" 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur"></div>

      <div className="relative z-10 w-full max-w-md p-10 mx-4 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        
        <div className="text-center mb-10">
            <div className="relative inline-flex mb-6">
                <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse scale-110"></div>
                <div className="relative p-6 rounded-full bg-gradient-to-b from-blue-500/20 to-transparent border border-white/10 shadow-inner">
                    <img src="/images/login/profile-icon.png" alt="Admin" className="w-14 h-14 object-contain brightness-125" />
                </div>
            </div>
            
            <h1 className="text-4xl font-black text-white tracking-[0.25em] uppercase italic">Admin</h1>
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-3"></div>
            <p className="text-blue-200/50 mt-5 font-semibold tracking-[0.3em] text-[10px] uppercase">
                Secure Terminal Access
            </p>
        </div>
        
        <LoginForm />
      </div>
    </div>
  )
}