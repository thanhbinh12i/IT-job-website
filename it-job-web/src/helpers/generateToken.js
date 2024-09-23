export function generateToken(){
      const characters = "ABCHkjasafkaslakasjnlalsirqpcjakllaslmf1242534636788";
      const length = 15;
      let token = '';
      for (let i=0; i< length; i++){
            token += characters.charAt(Math.floor(Math.random()*characters.length));
      }
      return token;
}