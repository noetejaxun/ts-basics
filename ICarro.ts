// Las interfaces son abstracciones que definen el comportamiento de las clases que la implementan.
export interface ICarro {
    motor : string;
    color : string;

    freno() : void;
}