"use client";

import styles from "./page.module.css";

import { Header } from "@/components/Header/Header";
import { Container } from '@mantine/core';
import {TableUI} from "@/components/Table/TableUI"
import { CardGrid } from "@/components/CardGrid/CardGrid";
import { DoubleNavbar } from "@/components/DoubleNavbar/DoubleNavbar";


export default function Home() {
  return (


   <div style={{ display: 'flex', flexDirection: 'row' }}>
      <DoubleNavbar />

      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Header />
        <Container>
          <CardGrid />
          <TableUI />
        </Container>
      </div>
    </div>

    
  );
}
