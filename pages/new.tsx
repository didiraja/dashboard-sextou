import type { NextPage } from 'next';
import { FormGroup, InputGroup, Switch } from '@blueprintjs/core';
import { Button } from '@blueprintjs/core';

const New: NextPage = () => {
  return (
    <div className="container" style={{ width: '500px', marginLeft: '30px' }}>
      <FormGroup helperText="ex: nome do seu evento" label="Título" labelFor="text-input" labelInfo="(required)">
        <InputGroup id="text-input" placeholder="Festa lá no meu barraco" />
      </FormGroup>

      <FormGroup helperText="ex: data do seu evento" label="Data" labelFor="text-input" labelInfo="(required)">
        <InputGroup id="text-input" placeholder="09/08/2022" />
      </FormGroup>

      <FormGroup
        helperText="ex: descricão do seu evento"
        label="Descricão"
        labelFor="text-input"
        labelInfo="(required)"
      >
        <InputGroup id="text-input" placeholder="A festa vai ser muito boa pois..." />
      </FormGroup>

      <FormGroup label="Highlight" labelFor="text-input">
        <Switch label="É evento Destaque?" />
      </FormGroup>

      <div className="select-wrapper" style={{ display: 'flex' }}>
        <FormGroup label="Região" labelFor="text-input" labelInfo="(required)">
          <div className="bp4-html-select bp4-large">
            <select>
              <option selected>Choose an item...</option>
              <option value="1">Zona Norte</option>
              <option value="2">Centro</option>
              <option value="3">Zona Sul</option>
              <option value="4">Baixada</option>
            </select>
            <span className="bp4-icon bp4-icon-double-caret-vertical"></span>
          </div>
        </FormGroup>

        <FormGroup label="Bairro" labelFor="text-input" labelInfo="(required)">
          <div className="bp4-html-select bp4-large">
            <select>
              <option selected>Choose an item...</option>
              <option value="1">Méier</option>
              <option value="2">Lapa</option>
              <option value="3">Botafogo</option>
              <option value="4">Caxias</option>
            </select>
            <span className="bp4-icon bp4-icon-double-caret-vertical"></span>
          </div>
        </FormGroup>

        <FormGroup label="Música" labelFor="text-input" labelInfo="(required)">
          <div className="bp4-html-select bp4-large">
            <select>
              <option selected>Choose an item...</option>
              <option value="1">Hip-hop</option>
              <option value="2">Rock</option>
              <option value="3">EDM</option>
              <option value="4">Funk</option>
            </select>
            <span className="bp4-icon bp4-icon-double-caret-vertical"></span>
          </div>
        </FormGroup>
      </div>

      <Button intent="primary" large icon="new-object">
        Criar Evento
      </Button>
    </div>
  );
};

export default New;
