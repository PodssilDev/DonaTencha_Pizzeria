import Keycloak from 'keycloak-js'

const keycloakConfig = {
    url: "http://host.docker.internal:8085",
    realm: "tingeso-webapp",
    clientId: "springboot-keycloak",
  };
  
  const keycloak = new Keycloak(keycloakConfig);

  export default keycloak;