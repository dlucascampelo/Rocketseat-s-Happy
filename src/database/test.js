const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
   
    // inserir dados na tabela
    await saveOrphanage(db,{
    lat: "-8.0440316",
    lng: "-34.9295176",
    name: "Lar -Bem",
    about:
      "Lar Batista Elizabeth Mein trata-se de uma sociedade evangélica beneficente, sócio-filantrópica, sem fins lucrativos",
      whatsapp:null,
    images: [
      "https://jconlineimagem.ne10.uol.com.br/imagem/galeria/2016/04/29/5712_avulsa/normal/0d74586badbef2905ed11b65c6dd6199.jpg",
      "https://larbempe.files.wordpress.com/2012/09/5257439533_51c22a2604_b.jpg",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar",
    opening_hours: "Horário de visitas Das 8h até as 18h",
    open_on_weekends: "1",
    });
    //consultar tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    //console.log(orphanage)

    // // deletar dado da tabela
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))

})