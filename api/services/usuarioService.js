const database = require('../models');
const { hash } = require('bcryptjs');
const uuid = require('uuid');

class UsuarioService {
  async buscarTodosUsuarios() {
    const usuarios = await database.usuarios.findAll();
    return usuarios;
  }

  async buscarUsuarioPorId(id) {
    const usuario = await database.usuarios.findOne({
      include: [
        {
          model: database.roles,
          as: 'usuario_roles',
          attributes: ['id', 'nome', 'descricao'],
        },
        {
          model: database.permissoes,
          as: 'usuario_permissoes',
          attributes: ['id', 'nome', 'descricao'],
        },
      ],
      where: {
        id: id,
      },
    });
    if (!usuario) {
      throw new Error('Usuário informado não cadastrado!');
    }
    return usuario;
  }

  async cadastrar(dto) {
    const usuario = await database.usuarios.findOne({
      where: {
        email: dto.email,
      },
    });

    if (usuario) {
      throw new Error('Usuário já cadastrado.');
    }

    try {
      const senhaHash = await hash(dto.senha, 8);

      const novoUsuario = await database.usuarios.create({
        id: uuid.v4(),
        nome: dto.nome,
        email: dto.email,
        senha: senhaHash,
      });

      return novoUsuario;
    } catch (erro) {
      throw new Error('Erro ao cadastrar usuário.');
    }
  }

  async editarUsuario(dto) {
    const usuario = await this.buscarUsuarioPorId(dto.id);
    try {
      usuario.nome = dto.nome;
      usuario.email = dto.email;
      await usuario.save();
      return usuario;
    } catch (error) {
      throw new Error('Erro ao editar usuário!');
    }
  }

  async deletarUsuario(id) {
    await this.buscarUsuarioPorId(id);
    try {
      await database.usuarios.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error('Erro ao tentar deletar o usuário!');
    }
  }
}

module.exports = UsuarioService;
