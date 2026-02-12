'use client';

import { Container, Group, Text, Anchor, Stack, Box } from '@mantine/core';

export function Footer() {
    return (
        <Box bg="navy.9" c="gray.4" py="xl" style={{ borderTop: '1px solid #1f2937' }}>
            <Container size="lg">
                <Group justify="space-between" align="start">
                    <Box>
                        <Text size="lg" fw={700} c="white" mb="sm">오름정보통신</Text>
                        <Stack gap="xs" fz="sm">
                            <Group gap="xs">
                                <Text span>대표: 홍길동</Text>
                                <Text span c="dimmed">|</Text>
                                <Text span>사업자등록번호: 000-00-00000</Text>
                            </Group>
                            <Text>주소: 서울특별시 강남구 테헤란로 123, 오름빌딩 5층</Text>
                            <Text>통신판매업신고: 제 2024-서울강남-0000호</Text>
                            <Text>대표전화: 1544-0000 (평일 09:00 - 18:00)</Text>
                        </Stack>
                    </Box>

                    <Box style={{ textAlign: 'right' }}>
                        <Group gap="lg" mb="sm">
                            <Anchor href="#" c="gray.4" fz="sm">개인정보처리방침</Anchor>
                            <Anchor href="#" c="gray.4" fz="sm">이용약관</Anchor>
                            <Anchor href="#" c="gray.4" fz="sm">서비스안내</Anchor>
                        </Group>
                        <Text size="sm" c="dimmed">
                            COPYRIGHT © ORM INFO TECH. ALL RIGHTS RESERVED.
                        </Text>
                    </Box>
                </Group>
            </Container>
        </Box>
    );
}
