import axios from "axios";
import { EnvelopeSimple, Lock } from "phosphor-react";
import { FormEvent, useEffect, useState } from "react";
import { Logo } from "../assets/logo";
import { Button } from "../components/Button";
import { CheckBox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput} from "../components/TextInput";

export function SignIn(){
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)

    async function handleSubmitForm(event:FormEvent){
        event.preventDefault()
        
        const response = await axios.post('/users', {
          email: 'lorena@gmail.com',
          password: 'falcãoDoNore'
        })
        setIsUserSignedIn(true)
    }

  


    return(
        <div className='flex flex-col justify-center items-center w-screen h-screen bg-gray-900'>

        <header className='flex flex-col items-center'>
          <Logo/>
          <Heading size='2xl' asChild>
            <h1 className='mt-4'>ignite lab</h1>
          </Heading>
            <Text className='text-gray400 mt-3' asChild>
              <p>Faça login e começe a usar</p>
            </Text>
        </header>
        
        <form onSubmit={handleSubmitForm} className='flex flex-col w-full max-w-[25rem] mt-10 gap-4'>
            {
                isUserSignedIn && (<Text>formulário enviado</Text>)
            }
          
          <label  className='flex flex-col gap-y-3' htmlFor="email">
            <Text className=' font-semibold' size='sm' >
                Endereço de e-mail
            </Text>
            <TextInput.Root>
              <TextInput.Icon >
                <EnvelopeSimple/>
              </TextInput.Icon>
  
              <TextInput.Input type='email' id='email' placeholder='johw@example.com'/>
            </TextInput.Root>
          </label>
  
          <label className='flex flex-col gap-y-3' htmlFor="password">
            <Text className='font-semibold' size='sm' >
                Sua senha
            </Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock/>
              </TextInput.Icon>
  
              <TextInput.Input type='password' id='password' placeholder='******'/>
            </TextInput.Root>
          </label>
  
          <label htmlFor='remember' className="flex content-center mt-4 gap-2 ">
            <CheckBox id='remember'  />
            <Text className='text-gray200' size="xs">
              Lembre de mim por 30 dias
            </Text>
          </label>
  
          <Button className='mt-4' type='submit'>
            Entrar na plataforma
          </Button>
  
        </form>
  
        <footer className='flex flex-col gap-y-4 items-center w-full max-w-[25rem] mt-8 gap-4'>
          <a  className='text-gray-400 text-xs underline hover:text-gray-200'>Esqueceu sua senha?</a>
          <a  className='text-gray-400 text-xs underline hover:text-gray-200'>Não possui conta? Crie uma agora</a>
        </footer>
  
      </div>
    )
}