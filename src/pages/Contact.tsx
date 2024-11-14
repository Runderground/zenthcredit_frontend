import ContactSVG from '../assets/Contact.svg'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { Button } from '@/components/ui/button'
import InputMask from 'react-input-mask'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea'
import axios from 'axios'
import toast from 'react-hot-toast'

const formSchema = z.object({
  nome: z.string().nonempty({message: "Este campo é obrigatório"}).min(3, {message: "O seu nome deve ter no mínimo 3 caracteres"}).max(50, {message: "Você excedeu o limite de caracteres, caso precise, abrevie seu nome. Ex: João S. Silva"}).regex(/^[a-zA-Z0-9\s]*$/, {message: "Não é permitido caracteres especiais"}),
  email: z.string().email({message: "Insira um email válido!"}).nonempty({message: "Este campo é obrigatório"}).min(3, {message: "O seu nome deve ter no mínimo 3 caracteres"}).max(100, {message: "Você excedeu o limite de *100* caracteres"}),
  telefone: z.string().nonempty({message: "Este campo é obrigatório"}).regex(/^(?:\+55\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[\s\-]?\d{4}$/, {message: "Insira um número telefone válido!"}),
  comentario: z.string().max(250, {message: "Você excedeu o limite de *250* caracteres"}).regex(/^[a-zA-Z0-9\s.,;!?$%@áéíóúâêîôûãõçÁÉÍÓÚÂÊÎÔÛÃÕÇàèìòùÀÈÌÒÙ]*$/, {message: "Não é permitido caracteres especiais"}).optional()
})

export default function Contact() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email:"",
      telefone:"",
      comentario: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/contatos/register`, values)
      form.reset()
      toast.success(`Formulário enviado, entraremos em contato em breve!`)
    } catch (error:any) {
      toast.error(error.response.data.error)
    }
  }
  
  return (
    <section className="flex flex-col lg:flex-row m-4 lg:m-12 items-center justify-center lg:justify-between">
      <img className="w-64 h-64 lg:w-1/2 lg:h-1/2 lg:mr-4" src={ContactSVG} alt="Contact SVG"/>
      <div className="border-slate-300 border-2 rounded p-8">
        <h2 className="font-semibold text-3xl text-slate-700">Fale Conosco</h2>
        <span className="text-slate-600">Está com alguma dúvida ou precisando de ajuda?</span>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-6">
            <FormField 
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome :</FormLabel>
                  <FormControl>
                    <Input placeholder="Escreva seu Nome" {...field}/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
              />
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
              name="telefone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone / WhatsApp :</FormLabel>
                  <FormControl>
                    <InputMask mask="(99) 99999-9999" {...field}>
                      {() => (
                    <Input placeholder="(DD) 99999-9999" {...field}/>
                      )}
                    </InputMask>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
              />
            <FormField 
              control={form.control}
              name="comentario"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Informações extras :</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tem algo a nos contar? Escreva aqui ou deixe vazio." {...field}/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
              />
            <Button className="mb-4" type="submit">Enviar</Button>
          </form>
        </Form>
        <span className="text-slate-500">Após o envio, algum de nossos atendentes irá tentar entrar em contato.</span>
      </div>
    </section>
  )
}