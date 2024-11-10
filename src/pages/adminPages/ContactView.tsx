import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Bolt
} from 'lucide-react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Badge } from '@/components/ui/badge'


export default function ContactView() {
  return (
    <div className="m-6 mt-12">
      <h1 className="text-3xl font-semibold mb-4">Olá Rafael 👋,</h1>
    <section>
      <Card>
      <CardHeader>
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
          <CardTitle>Todos os contatos pendentes</CardTitle>
          <div className="flex gap-2">
            <Input className="w-56" placeholder="Pesquise pelo email"/>
            <Button><Search/></Button>
          </div>
        </div>
      </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>
              Lista de todos contatos cadastrados
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Situação</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Info. Extra</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><DropdownMenu>
                  <DropdownMenuTrigger>
                    <Bolt/>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>
                      Opções
                    </DropdownMenuLabel>
                    <DropdownMenuItem>
                      Alterar situação
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Chamar no WhatsApp
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Editar contato
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Excluir contato
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu></TableCell>
                <TableCell><Badge className="bg-yellow-400">Pendente</Badge></TableCell>
                <TableCell>Rafael Bueno</TableCell>
                <TableCell>rafaelbuenorb02@gmail.com</TableCell>
                <TableCell>(11) 99418-7606</TableCell>
                <TableCell>Gostaria de saber mais sobre o Financiamento de Carro.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Bolt/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>
                        Opções
                      </DropdownMenuLabel>
                      <DropdownMenuItem>
                        Alterar situação
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Chamar no WhatsApp
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Editar contato
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Excluir contato
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>  
                </TableCell>
                <TableCell><Badge className="bg-green-400">Atendido</Badge></TableCell>
                <TableCell>Maria Clara</TableCell>
                <TableCell>mariaclara@gmail.com</TableCell>
                <TableCell>(23) 42143-7606</TableCell>
                <TableCell>Como faço para simular no site? Tenho dúvidas...</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
      <div className="flex items-center gap-8 justify-center mt-4">
        <Button variant="outline"><ChevronLeft/></Button>
        <span className="font-bold"> 1 </span>
        <Button variant="outline"><ChevronRight/></Button>
      </div>
    </div>
  )
}