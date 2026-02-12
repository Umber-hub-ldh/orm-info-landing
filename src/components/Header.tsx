'use client';

import { Container, Group, Button, Text, Box, Image } from '@mantine/core';
import { IconPhone } from '@tabler/icons-react';

export function Header() {
    return (
        <Box
            component="header"
            py="md"
            bg="white"
            style={{
                borderBottom: '1px solid #E5E7EB',
                position: 'sticky',
                top: 0,
                zIndex: 1000
            }}
        >
            <Container size="lg">
                <Group justify="space-between">
                    <Group gap="xs">
                        <Image src="/images/logo.png" alt="오름정보통신" h={40} w="auto" fit="contain" style={{ cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
                    </Group>

                    <Group gap="xl" visibleFrom="sm">
                        <Text component="a" href="#services" size="sm" fw={500} c="dimmed" style={{ textDecoration: 'none' }}>
                            서비스 소개
                        </Text>
                        <Text component="a" href="#process" size="sm" fw={500} c="dimmed" style={{ textDecoration: 'none' }}>
                            개통 절차
                        </Text>
                        <Text component="a" href="#reviews" size="sm" fw={500} c="dimmed" style={{ textDecoration: 'none' }}>
                            고객 후기
                        </Text>
                    </Group>

                    <Button
                        component="a"
                        href="#consultation"
                        leftSection={<IconPhone size={18} />}
                        color="orange"
                    >
                        상담 신청하기
                    </Button>
                </Group>
            </Container>
        </Box>
    );
}
