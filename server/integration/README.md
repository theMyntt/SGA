# Rotas da API.

<div style="display: flex; align-items: center">
<img src="https://img.shields.io/badge/POST-red?style=for-the-badge" /> 
<span> - /api/user/set/</span>
</div>

```
{
    "email": "admin@admin.org",
    "password": "12345678",
    "cellphone": "11 99000-0000",
    "cpf": "364.461.000-27",
    "stateRg": "SP/SSP",
    "rg": "10.542.771-8",
    "firstName": "Admin",
    "lastName": "Last Name",
    "schoolId": "s0ggbegy2eblp93-j63jfy5d2gmj010-exb2rz9usdkigh5-bliu6apya2v7e7r"
}
>>> Usuário cadastrado com sucesso.
```
- "cellphone" não é obrigatório.
- "cellphone" pode ter no máximo 12 números (ignorando carácteres especiais).
- apenas cpf validos são aceitos.
- apenas rg validos são aceitos.

<div style="display: flex; align-items: center">
<img src="https://img.shields.io/badge/POST-red?style=for-the-badge" /> 
<span> - /api/user/get/</span>
</div>

```
{
  "email: "admin@admin.org",
  "password": "12345678"
}
>>> 1234298
```
- Está rota retorna um token gerado na /api/user/set/