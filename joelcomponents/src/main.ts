import Button from '@jcomponents/button';
import Modal from "@jcomponents/modal";
import Header from '@jcomponents/header';
import Nav from "@jcomponents/nav";
import Container from "@jcomponents/container";
import Link from "@jcomponents/link";

export { Button, Modal, Header, Nav, Container, Link }; //expose

export function jcolorize(input: string): string { //turns jgreen, jblue, jred into hex code
    type jcolor='jred' | 'jyellow' | 'jgreen' | 'jblue';
    const validJColors: jcolor[]=['jred', 'jyellow', 'jgreen', 'jblue'];

    if (input && validJColors.includes(input.toLowerCase() as jcolor))
        switch (input.toLowerCase()) {
            case 'jred':    return '#ff8f8f';
            case 'jyellow': return '#ffd472';
            case 'jgreen':  return '#90ee90';
            case 'jblue':   return '#aed8fc';
        }
    return input;
}
