'use client';

import { Container, Title, Text, SimpleGrid, ThemeIcon, Paper, Group, Box, rem } from '@mantine/core';
import { IconLock, IconCertificate, IconShieldCheck, IconBuildingBank } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export function SecuritySection() {
    return (
        <Box py={100} bg="gray.0" id="trust">
            <Container size="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <Title order={2} ta="center" mb={60} c="navy.9">
                        믿을 수 있는 기업, 오름정보통신
                    </Title>
                </motion.div>

                <SimpleGrid cols={{ base: 1, md: 2 }} spacing={40}>
                    {/* Security Block */}
                    <Paper shadow="md" p="xl" radius="lg" withBorder style={{ borderTop: '4px solid #002C5F' }}>
                        <Group align="flex-start" mb="md">
                            <ThemeIcon size={50} radius="md" color="navy" variant="light">
                                <IconLock style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
                            </ThemeIcon>
                            <div>
                                <Text size="xl" fw={700} c="navy.9" mb="xs">
                                    철저한 보안 관리
                                </Text>
                                <Text c="dimmed" lh={1.6}>
                                    법인 인감, 사업자 등록증 등 기업 중요 서류는<br />
                                    <strong>암호화되어 안전하게 관리</strong>되며,<br />
                                    개통 완료 즉시 파기됩니다.
                                </Text>
                            </div>
                        </Group>
                    </Paper>

                    {/* Official Certification Block */}
                    <Paper shadow="md" p="xl" radius="lg" withBorder style={{ borderTop: '4px solid #FF7A00' }}>
                        <Group align="flex-start" mb="md">
                            <ThemeIcon size={50} radius="md" color="orange" variant="light">
                                <IconCertificate style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
                            </ThemeIcon>
                            <div>
                                <Text size="xl" fw={700} c="navy.9" mb="xs">
                                    공식 인증 대리점
                                </Text>
                                <Text c="dimmed" lh={1.6}>
                                    통신 3사(SKT, KT, LGU+)의 공식 인가를 받은<br />
                                    법인 전문 유통점으로, <strong>100% 정품</strong>만 취급합니다.<br />
                                    또한 단말기가 필요 없으신분들을 위한<br />
                                    다양한 <strong>MVNO(알뜰폰) 회선 상담</strong>도 가능합니다.
                                </Text>
                            </div>
                        </Group>
                    </Paper>
                </SimpleGrid>
            </Container>
        </Box>
    );
}
