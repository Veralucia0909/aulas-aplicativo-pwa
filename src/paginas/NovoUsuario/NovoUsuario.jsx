import { useState } from "react";

import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import { TbHomeStats } from "react-icons/tb";
import { toast } from "react-toastify";

const NovoUsuario = () => {
  const [usuarioForm, setUsuarioForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

const salvar = () => {
if (!usuarioForm.nome.trim() || !usuarioForm.email.trim() || !usuarioForm.senha.trim() || !usuarioForm.confirmarSenha.trim()) {
toast("Todos os campos são obrigatórios!");
return;
}

if (!usuarioForm.nome.trim() || !usuarioForm.email.trim() || !usuarioForm.senha.trim() || !usuarioForm.confirmarSenha.trim()) {
toast("As senhas não coincidem!");
return;
}
 console.log("Salvar", usuarioForm);

const usuarioDoLocalStorage = JSON.parse(localStorage.getItem("usuarios")) || [];

const usuarioJaCadastrado = usuarioDoLocalStorage.find(u => u.email === usuarioForm.email);

if (usuarioJaCadastrado) {
toast.error("Este email já está cadastrado!");
return;
}

usuarioDoLocalStorage.push({id: crypto.randomUUID(), ...usuarioForm}); 

localStorage.setItem("usuarios", JSON.stringify(usuarioDoLocalStorage));
toast.success("Usuário salvo com sucesso!");


}
  return (
    <Principal titulo="Novo Usuário">

      <CampoCustomizado
        label="nome"
        value={usuarioForm.nome}
        onChange={(e) =>
          setUsuarioForm({
            ...usuarioForm,
            nome: e.target.value,
          })
        }
        obrigatorio
      />

      <CampoCustomizado
        label="email"
        type="email"
        value={usuarioForm.email}
        onChange={(e) =>
          setUsuarioForm({
            ...usuarioForm,
            email: e.target.value,
          })
        }
        obrigatorio
      />

      <CampoCustomizado
        label="senha"
        type="password"
        value={usuarioForm.senha}
        onChange={(e) =>
          setUsuarioForm({
            ...usuarioForm,
            senha: e.target.value,
          })
        }
        obrigatorio
      />

      <CampoCustomizado
        label="confirmar senha"
        type="password"
        value={usuarioForm.confirmarSenha}
        onChange={(e) =>
          setUsuarioForm({
            ...usuarioForm,
            confirmarSenha: e.target.value,
          })
        }
        obrigatorio
      />

      <BotaoCustomizado
        tipo="secundario"
        onClick={() => console.log(usuarioForm)}
      >
        Salvar
      </BotaoCustomizado>

    </Principal>
  );
};

export default NovoUsuario;