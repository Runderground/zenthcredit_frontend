import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Search,
  ChevronLeft,
  ChevronRight
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


export default function RegistersView() {
  return (
    <div className="m-6 mt-12">
      <h1 className="text-3xl font-semibold mb-4">Olá Rafael 👋,</h1>
    <section>
      <Card>
      <CardHeader>
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
          <CardTitle>Todos os usuários cadastrados</CardTitle>
          <div className="flex gap-2">
            <Input className="w-56" placeholder="Pesquise pelo email"/>
            <Button><Search/></Button>
          </div>
        </div>
      </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>
              Lista de todos os usuários cadastrados na Zenith.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>CPF</TableHead>
                <TableHead>Nascimento</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Rafael Bueno</TableCell>
                <TableCell>rafaelbuenorb02@gmail.com</TableCell>
                <TableCell>(11) 99418-7606</TableCell>
                <TableCell>123-456-789-10</TableCell>
                <TableCell>22-04-2007</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Joao Pedro</TableCell>
                <TableCell>joaopedro@gmail.com</TableCell>
                <TableCell>(12) 12345-67890</TableCell>
                <TableCell>123-456-789-10</TableCell>
                <TableCell>15-02-1999</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Maria Clara</TableCell>
                <TableCell>maria_clara@gmail.com</TableCell>
                <TableCell>(43) 91238-1244</TableCell>
                <TableCell>123-456-789-10</TableCell>
                <TableCell>12-06-2000</TableCell>
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