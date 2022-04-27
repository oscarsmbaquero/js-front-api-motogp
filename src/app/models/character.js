

class CharacterClass {

   constructor(char_id, img, name, nickname, category){
   this.char_id = char_id
   this.img = img;
   this.name = name;
   this.nickname = nickname;
   this.category = category;
   
   }
   getCharacterId(){
    return this.char_id;
   }
   getCharacterImg(){
    return this.img;
   }

   getCharacterName(){
    return this.name;
   }

   getCharacterNickName(){
    return this.nickname;
   }

   getCharacterCategory(){
    return this.category;
   }

  

}

class CharacterRandomizer extends CharacterClass {
    constructor(char_id, img, name, nickname, category, portrayed) {
      super(char_id, img, name, nickname, category);
      this.portrayed = portrayed;
      
    }
  
    getCharacterPortrayed(){
        return this.portrayed;
       }   
  }

  export { CharacterClass, CharacterRandomizer};

