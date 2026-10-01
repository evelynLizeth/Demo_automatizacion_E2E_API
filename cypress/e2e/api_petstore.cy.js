describe('Pruebas de API REST - PetStore Swagger', () => {
  
  const petId = 12345678; // ID único para nuestra mascota de prueba

  it('1. Añadir una mascota a la tienda (POST)', () => {
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/pet',
      body: {
        id: petId,
        category: { id: 1, name: "perros" },
        name: "Firulais",
        photoUrls: ["string"],
        tags: [{ id: 1, name: "friendly" }],
        status: "available"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq("Firulais");
      expect(response.body.status).to.eq("available");
    });
  });

  it('2. Consultar la mascota ingresada previamente por ID (GET)', () => {
    cy.request('GET', `https://petstore.swagger.io/v2/pet/${petId}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(petId);
      expect(response.body.name).to.eq("Firulais");
    });
  });

  it('3. Actualizar el nombre y el estatus de la mascota a "vendido" (PUT)', () => {
    cy.request({
      method: 'PUT',
      url: 'https://petstore.swagger.io/v2/pet',
      body: {
        id: petId,
        category: { id: 1, name: "perros" },
        name: "Firulais Actualizado",
        photoUrls: ["string"],
        tags: [{ id: 1, name: "friendly" }],
        status: "sold" // Cambiado a vendido
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq("Firulais Actualizado");
      expect(response.body.status).to.eq("sold");
    });
  });

  it('4. Consultar la mascota modificada por estatus (GET por status)', () => {
    cy.request('GET', 'https://petstore.swagger.io/v2/pet/findByStatus?status=sold').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      
      // Verificamos que nuestra mascota aparezca en la lista de vendidos
      const mascotaEncontrada = response.body.find(pet => pet.id === petId);
      expect(mascotaEncontrada).to.not.be.undefined;
      expect(mascotaEncontrada.status).to.eq('sold');
    });
  });

});