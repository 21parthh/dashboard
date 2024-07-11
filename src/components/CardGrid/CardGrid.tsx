import React from 'react';
import { Card, Text, Group, SimpleGrid } from '@mantine/core';
import { IconArrowDownRight, IconArrowUpRight } from '@tabler/icons-react';
import classes from './CardGrid.module.css';

export function CardGrid() {
  return (
    <SimpleGrid cols={4}>
      <Card
        shadow="md"
        p="md"
        radius="md"
        className={classes.card}
        style={{
          height: '180px',
          width: '220px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Text
          className={classes.tableext}
          c="dark"
          tt="uppercase"
          fw={900}
          fz="xs"
          style={{ marginBottom: '30px' }}
        >
          Conservative
        </Text>
        <Group
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <Text c="dimmed" tt="uppercase" fw={700} fz="xs">
              Invested
            </Text>
            <Text fw={700} fz="xl">
              $52000
            </Text>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Text c="dimmed" tt="uppercase" fw={700} fz="xs">
              Current
            </Text>
            <Text fw={700} fz="xl">
              $51000
            </Text>
          </div>
        </Group>
        <Text
          c="dimmed"
          fz="sm"
          style={{ textAlign: 'left', marginBottom: '5px' }}
        >
          <Text component="span" fw={700} fz="xs" tt="uppercase">
            P&L
          </Text>
        </Text>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#FF7F7F',
            borderRadius: '20px',
            padding: '2px 6px',
            width: '80px',
          }}
        >
          <Text component="span" fw={700} color="red">
            +0.76%
          </Text>
          <IconArrowDownRight size="1rem" color="red" />
        </div>
      </Card>
      <Card
        shadow="sm"
        p="md"
        radius="md"
        className={classes.card}
        style={{
          height: '180px',
          width: '220px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Text
          c="dark"
          tt="uppercase"
          fw={900}
          fz="xs"
          style={{ marginBottom: '30px' }}
        >
          Moderate
        </Text>
        <Group
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <Text c="dimmed" tt="uppercase" fw={700} fz="xs">
              Invested
            </Text>
            <Text fw={700} fz="xl">
              $40000
            </Text>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Text c="dimmed" tt="uppercase" fw={700} fz="xs">
              Current
            </Text>
            <Text fw={700} fz="xl">
              $41000
            </Text>
          </div>
        </Group>
        <Text
          c="dimmed"
          fz="sm"
          style={{ textAlign: 'left', marginBottom: '5px' }}
        >
          <Text component="span" fw={700} fz="xs" tt="uppercase">
            P&L
          </Text>
        </Text>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#d4f4dd',
            borderRadius: '20px',
            padding: '2px 6px',
            width: '80px',
          }}
        >
          <Text component="span" fw={700} color="green">
            +0.81%
          </Text>
          <IconArrowUpRight size="1rem" color="green" />
        </div>
      </Card>
      <Card
        shadow="sm"
        p="md"
        radius="md"
        className={classes.card}
        style={{
          height: '180px',
          width: '220px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Text
          c="dark"
          tt="uppercase"
          fw={900}
          fz="xs"
          style={{ marginBottom: '30px' }}
        >
          Aggresive
        </Text>
        <Group
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <Text c="dimmed" tt="uppercase" fw={700} fz="xs">
              Invested
            </Text>
            <Text fw={700} fz="xl">
              $52000
            </Text>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Text c="dimmed" tt="uppercase" fw={700} fz="xs">
              Current
            </Text>
            <Text fw={700} fz="xl">
              $51000
            </Text>
          </div>
        </Group>
        <Text
          c="dimmed"
          fz="sm"
          style={{ textAlign: 'left', marginBottom: '5px' }}
        >
          <Text component="span" fw={700} fz="xs" tt="uppercase">
            P&L
          </Text>
        </Text>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#FF7F7F',
            borderRadius: '20px',
            padding: '2px 6px',
            width: '80px',
          }}
        >
          <Text component="span" fw={700} color="red">
            +0.76%
          </Text>
          <IconArrowDownRight size="1rem" color="red" />
        </div>
      </Card>
      <Card
        shadow="sm"
        p="md"
        radius="md"
        className={classes.card}
        style={{
          height: '180px',
          width: '220px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Text
          c="dark"
          tt="uppercase"
          fw={900}
          fz="xs"
          style={{ marginBottom: '30px' }}
        >
          Bitcoin
        </Text>
        <Group
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <Text c="dimmed" tt="uppercase" fw={700} fz="xs">
              Bitcoin
            </Text>
            <Text fw={700} fz="xl">
              $42000
            </Text>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Text c="dimmed" tt="uppercase" fw={700} fz="xs">
              Bitcoin
            </Text>
            <Text fw={700} fz="xl">
              $43000
            </Text>
          </div>
        </Group>
        <Text
          c="dimmed"
          fz="sm"
          style={{ textAlign: 'left', marginBottom: '5px' }}
        >
          <Text component="span" fw={700} fz="xs" tt="uppercase">
            P&L
          </Text>
        </Text>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#d4f4dd',
            borderRadius: '20px',
            padding: '2px 6px',
            width: '80px',
          }}
        >
          <Text component="span" fw={700} color="green">
            +0.76%
          </Text>
          <IconArrowUpRight size="1rem" color="green" />
        </div>
      </Card>
    </SimpleGrid>
  );
}
