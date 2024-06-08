//name : newDataBase
import {
    ColumnType,
    Generated,
    Insertable,
    JSONColumnType,
    Selectable,
    Updateable
  } from 'kysely'
  
  export interface Database {
    person: PersonTable
    //added only for testing
    pet: PetTable
    fact: FactTable
  }
  
  export interface FactTable {
    id: Generated<number>
    fact_text: string
    fact_type: 'cat' | 'number'
  }
  
  export type Fact = Selectable<FactTable>
  export type NewFact = Insertable<FactTable>
  export type FactUpdate = Updateable<FactTable>

  export interface PersonTable {
    id: Generated<number>
    first_name: string
    last_name: string
    gender : 'man' | 'woman'
  }

  export type Person = Selectable<PersonTable>
  export type NewPerson = Insertable<PersonTable>
  export type PersonUpdate = Updateable<PersonTable>
  
  export interface PetTable {
    id: Generated<number>
    name: string
    owner_id: number
    species: 'dog' | 'cat'
  }
  
  export type Pet = Selectable<PetTable>
  export type NewPet = Insertable<PetTable>
  export type PetUpdate = Updateable<PetTable>