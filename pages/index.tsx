import type { NextPage } from 'next';
import Link from 'next/link';
import { ButtonGroup, Button } from '@blueprintjs/core';

const Home: NextPage = () => {
  return (
    <div className="p-5">
      <ButtonGroup minimal large>
        <Link href="/new">
          <Button intent="primary" icon="add">
            Novo Evento
          </Button>
        </Link>
        <Button intent="primary" icon="multi-select">
          Selecionar Tudo
        </Button>
        <Button intent="primary" icon="delete">
          Deletar Evento
        </Button>
      </ButtonGroup>

      <br />
      <br />

      <table className="bp4-html-table bp4-html-table-striped bp4-interactive bp4-elevation-3">
        <thead>
          <tr>
            <th>Título</th>
            <th>Descricão</th>
            <th>Data</th>
            <th>Highlight</th>
            <th>Região</th>
            <th>Bairro</th>
            <th>Música</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Void Tijuca</td>
            <td>Djs na boate</td>
            <td>Sexta, 05 de Agosto</td>
            <td>false</td>
            <td>Zona Norte</td>
            <td>Tijuca</td>
            <td>Hip-hop</td>
          </tr>
          <tr>
            <td>De Carne e Flor e Desdito</td>
            <td>Show de banda underground</td>
            <td>Sábado, 09 de Agosto</td>
            <td>true</td>
            <td>Zona Sul</td>
            <td>Botafogo</td>
            <td>Rock</td>
          </tr>
          <tr>
            <td>Heavy Baile c/ FBC</td>
            <td>Show e discotecagem de Djs</td>
            <td>Sábado, 30 de Julho</td>
            <td>true</td>
            <td>Centro</td>
            <td>Lapa</td>
            <td>Hip-hop</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
