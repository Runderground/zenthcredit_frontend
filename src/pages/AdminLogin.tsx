import LoginSVG from '../assets/Login.svg'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import {useAuth} from '../context/authContext'

const formSchema = z.object({
  password: z.string().nonempty({message: "Este campo é obrigatório"}).min(3, {message: "O seu nome deve ter no mínimo 3 caracteres"}).max(255, {message: "Você excedeu o limite de caracteres"}),
  email: z.string().email({message: "Insira um email válido!"}).nonempty({message: "Este campo é obrigatório"}).min(3, {message: "O seu nome deve ter no mínimo 3 caracteres"}).max(100, {message: "Você excedeu o limite de *100* caracteres"})
})

export default function AdminLogin() {
  const {login} = useAuth()
  const [loading,setLoading] = useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password:"",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/admins/login`, values)
      setLoading(false)
      login(data.admin, data.token)
      toast.success(`Olá ${data.admin.nome}`)
    } catch (error: any) {
      setLoading(false)
      toast.error(error.response.data.error)
    }
  }

  return (
    <section className="flex flex-col lg:flex-row m-4 mt-20 items-center justify-center lg:justify-around">
      <img className="w-64 h-64 lg:w-1/4 lg:h-1/4 lg:mr-4" src={LoginSVG} alt="Contact SVG"/>
      <div className="border-slate-300 border-2 rounded p-8">
        <h2 className="font-semibold text-3xl text-slate-700">Acessar Paínel</h2>
        <span className="text-slate-600">Acesse sua conta preenchendo os campos.</span>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-6">
            <FormField 
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email :</FormLabel>
                  <FormControl>
                    <Input placeholder="exemplo@gmail.com" {...field}/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
              />
            <FormField 
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha :</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="*************" {...field}/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
              />
            <Button className="mt-4" type="submit" disabled={loading}>{loading ? 'Aguarde...' : 'Entrar'}</Button>
          </form>
        </Form>
      </div>
    </section>
  )
}