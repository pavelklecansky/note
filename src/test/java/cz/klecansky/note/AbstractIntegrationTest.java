package cz.klecansky.note;

import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

@Testcontainers
public abstract class AbstractIntegrationTest {

    @Container
    static PostgreSQLContainer<?> postgreSQL = new PostgreSQLContainer<>("postgres:15.3")
            .withUsername("testUsername")
            .withPassword("testPassword")
            .withDatabaseName("testDatabase");

    @DynamicPropertySource
    static void postgresqlProperties(DynamicPropertyRegistry registry) {
        registry.add("DB_URL", postgreSQL::getJdbcUrl);
        registry.add("DB_USER", postgreSQL::getUsername);
        registry.add("DB_PASSWORD", postgreSQL::getPassword);
    }
}
