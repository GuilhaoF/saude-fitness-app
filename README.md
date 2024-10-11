/src
  /application          # Lógica de negócios e casos de uso (Application Layer)
    /useCases           # Casos de uso da aplicação
      fetchUser.ts      # Lógica de um caso de uso
      createUser.ts
    /services           # Serviços internos, como autenticação, manipulação de dados
      authService.ts
  /domain               # Entidades e regras de negócios (Domain Layer)
    /entities           # Definição das entidades
      User.ts           # Entidade de usuário
    /repositories       # Interfaces dos repositórios
      userRepository.ts # Interface do repositório de usuários
    /valueObjects       # Objetos de valor (Value Objects)
      email.ts          # Validação e construção de e-mails
      password.ts
  /infrastructure       # Implementações externas (Infrastructure Layer)
    /api                # Chamadas externas, como APIs REST
      userApi.ts        # Implementação de chamada de API
    /repositories       # Implementação de repositórios (Data Sources)
      userRepository.ts # Implementação que conecta ao banco de dados ou API
    /config             # Configurações, como serviços de terceiros, env vars
      axiosConfig.ts    # Configuração do Axios
  /presentation         # Interface com o usuário (Presentation Layer)
    /components         # Componentes de UI reutilizáveis
      /Button           # Componente de botão reutilizável
        Button.tsx
        Button.styles.ts
    /pages              # Páginas da aplicação
      Home.tsx          # Página inicial
      Profile.tsx       # Página de perfil
    /hooks              # Hooks customizados para lógica de UI
      useAuth.ts        # Hook para autenticação
      useFetch.ts
    /routes             # Configuração de rotas
      index.tsx
  /shared               # Recursos compartilhados entre camadas
    /utils              # Funções utilitárias e helpers
      formatDate.ts     # Função utilitária
    /constants          # Constantes globais da aplicação
      apiEndpoints.ts   # Endpoints da API
    /types              # Tipos e interfaces TypeScript compartilhados
      global.d.ts       # Tipos globais
  /App.tsx              # Componente raiz da aplicação
  /index.tsx            # Ponto de entrada da aplicação
